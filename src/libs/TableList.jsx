import React, { useEffect } from 'react'
import TableWithPagination from '../Component/Tablepagination'
import { useDispatch, useSelector } from 'react-redux'
import { getdoctor } from '../redux/slices/doctorSlice'
import { useParams } from 'react-router-dom'
import { useTableList } from './services/useTableList'
import MainLayout from './Layout/MainLayout'
import CenterList from '../Pages/CenterList'
import DoctorList from '../Pages/DoctorList'
import AdminList from '../Pages/AdminList'
import CaseList from '../Pages/CaseList'
import TestCategoryList from '../Pages/TestCategoryList'
import TestList from '../Pages/TestList'
const TableList = ({tabledata}) => {
    // const actions = (row) =>(
    //     <div>
    //         <button onClick={() => alert(`Edit ${row.name}`)}>Edit</button>
    //         <button onClick={() => alert(`Delete ${row.name}`)}>Delete</button>
    //     </div>
    // );
     
    const {listName} = useTableList(tabledata);
    return (
        <MainLayout>
            {
                listName === "centers" ? <CenterList/> :
                listName === "doctors" ? <DoctorList /> :
                listName === "admins" ? <AdminList/> :
                listName === "cases" ? <CaseList/> :
                listName === "testcategory" ? <TestCategoryList/> :
                listName === "tests" ? <TestList/> :
                <div>
                    <h1>List Not Found</h1>
                    <p>Sorry, the list you are looking for does not exist.</p>
                </div>
            }
        </MainLayout>
    )
}

export default TableList
