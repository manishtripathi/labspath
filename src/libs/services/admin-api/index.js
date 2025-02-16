import api from "../../../redux/apiGateways/apiHandler"
import { GET_CASE_BY_ID } from "./constants"

export const getCaseById = async(id) =>{
    try {
        const response = await api.get(`${GET_CASE_BY_ID}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error)
        return error;
    }
}