import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getdoctor } from "../../redux/slices/doctorSlice"
import { getTableListData } from "./getTableListData"

export const useTableList = (tabledata) =>{
    const dispatch = useDispatch()
    const {listName} = useParams()
    return {listName};
}