import api from "../../../redux/apiGateways/apiHandler"
import { addCase } from "./constants"

export const AddCase = async(payload) =>{
    try {
        const response = await api.post(addCase,payload);
        return response.data;
    } catch (error) {
        return error;
    }
}