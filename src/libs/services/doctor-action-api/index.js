import api from "../../../redux/apiGateways/apiHandler"
import { ADD_TEST, ADD_TEST_CATEGORY } from "./constants"

export const addTestCategory = async(data) =>{
    try {
        const response = await api.post(ADD_TEST_CATEGORY, data);
        return response; 
    } catch (error) {
        return error;
    }
}
export const addTest = async(data) =>{
    try {
        const response = await api.post(ADD_TEST, data);
        return response; 
    } catch (error) {
        return error;
    }
}