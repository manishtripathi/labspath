import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getdoctor } from "../../redux/slices/doctorSlice"
import { getTableListData } from "./getTableListData"

export const useTableList = () =>{
    const dispatch = useDispatch()
    const {listName} = useParams()
    const [tableData, setTableData] = useState([])
    const [headers, setHeaders] = useState([]);
    console.log(listName)
    const { token,user } = useSelector(store => store.auth)
    const centerId = "679a57d1c8a76dff3665773e"

    useEffect(() => {
        if(token)
        getTableListData(listName, {token, centerId}, dispatch, setTableData)
    }, [token])

    useEffect(()=>{
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