import React, { useEffect } from 'react'
import TableWithPagination from '../Component/Tablepagination'
import { useDispatch, useSelector } from 'react-redux'
import { getdoctor } from '../redux/slices/doctorSlice'
import { useParams } from 'react-router-dom'
import { useTableList } from './services/useTableList'
const TableList = ({tabledata}) => {
    const actions = (row) =>(
        <div>
            <button onClick={() => alert(`Edit ${row.name}`)}>Edit</button>
            <button onClick={() => alert(`Delete ${row.name}`)}>Delete</button>
        </div>
    );

    const {tableData , headers} = useTableList(tabledata);
    return (
        <div>
            <TableWithPagination data={tableData} rowsPerPage={6} dataRowHeadingList={headers} actions={actions} />
        </div>
    )
}

export default TableList
