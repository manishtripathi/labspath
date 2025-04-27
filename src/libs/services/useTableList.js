import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getdoctor } from "../../redux/slices/doctorSlice"
import { getTableListData } from "./getTableListData"

export const useTableList = (tabledata) =>{
    const dispatch = useDispatch()
    const {listName} = useParams()
    const [tableData, setTableData] = useState(tabledata || [])
    const [headers, setHeaders] = useState([]);
    const { token,user } = useSelector(store => store.auth)
    const dropdownoptions = useSelector(state =>state.dropDownOptions)

    useEffect(() => {
        console.log('from useTableList1', tableData);
        if(!tabledata && token)
        getTableListData(listName, dispatch, setTableData, dropdownoptions, )
    }, [token, listName])

    useEffect(()=>{
        console.log('from useTableList', tableData);
        if(tableData?.length > 0){
            const headerRow = Object.keys(tableData[0]);
            setHeaders(headerRow)
        }
    },[tableData])


    const sampleData = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    ];
    console.log("tableData", tableData)

    useEffect(()=>{
        console.log(tableData)
    },[tableData])
    
    return {listName, headers,tableData}
}