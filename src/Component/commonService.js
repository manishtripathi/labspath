import axios from "axios";
import {toast } from "react-toast"
import { loginAsAdmin, loginAsDoctor } from "../redux/slices/authSlice"
import { toastPromise } from "../redux/toastHandler";
import api from "../redux/apiGateways/apiHandler";
import { addTest, addTestCategory } from "../libs/services/doctor-action-api";
import { AddCase } from "../libs/services/center-api";
import store from "../redux/store";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const handleLoginAsDoctor = (data, dispatch, navigate, setLoader) => {
    setLoader(true);
    dispatch(loginAsDoctor(data)).then((res) => {
        if (res?.status >= 400 || !res?.payload?.token) {
            toast.error(res?.payload?.message || "Error Logging in ")
        } else {
            toast.success(res?.payload?.message || "Successfull login")
            navigate("/dashboard");
        }
    })
        .catch((err) => {
            console.error(err);
            toast.error(res?.payload?.message || "Error Logging in ");
        })
        .finally(()=>{
            setLoader(false);
        })
}

 const handleLoginAsAdmin = (data, dispatch, navigate, setLoader) => {
    setLoader(true);
    const messages = {
        pending: "Logging in as Admin...",
        success: "Login successful!",
        error: "Error logging in as Admin",
    };

    return toastPromise(
        dispatch(loginAsAdmin(data)),messages)
        .then((res) => {
            if (res?.payload?.token) {
                localStorage.setItem("token", res?.payload?.token);
                toast.success(res?.payload?.message || "Successfull login")
                navigate("/dashboard");
            } else {
                toast.error(res?.payload?.message || "Error Logging in ")
                throw new Error("Invalid credentials");
            }
        })
        .catch((error) => {
            toast.error(res?.payload?.message || "Error Logging in ")
            })
        .finally(()=>{
            setLoader(false)
        });
};



const handleLoginAsSuperAdmin = (data, dispatch, navigate, setLoader) => {
    setLoader(true);
    dispatch(loginAsDoctor(data)).then((res) => {
         
        
        if (res?.status >= 400 || !res?.payload?.token) {
            toast.error(res?.payload?.message || "Error Logging in ")
        } else {
            toast.success(res?.payload?.message || "Successfull login");
            navigate("/dashboard");
        }
        })
        .catch((err) => {
            console.error(err);
            toast.err(res?.payload?.message || "Error logging in");
        })
        .finally(()=>{
            setLoader(false);
        })
}

const formReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};


// Add Doctor

export const handleAddDoctor = async (data, setDisplayModal, setLoader) => {
    debugger
    // const centerId= store.getState().auth.user.center;
    const centerId = "680e1f8ea38b89f4ce548730";
    const payload = structuredClone(data);
    payload.centerId = centerId;
    console.log("data for adding doctor", payload);
    const res = await api.post(`add-doctor`, payload);
    {setLoader && setLoader(true)}
    console.log("status", res?.status)
    if (res?.status >= 400) {
         
        setDisplayModal(false)
        {setLoader && setLoader(false)}
        return toast.error("Error adding doctor");
    } else {
        setDisplayModal(false)
        {setLoader && setLoader(false)}

        return toast.success("Dcotor has been successfully added");
    }
    
}

// add center

export const handleAddcenter = async (data, setDisplayModal, setLoader) => {
    const res = await api.post(`add-center`, data, {
    })
    {setLoader && setLoader(true)}
    console.log(res)
    if (res?.status >= 400) {
        setDisplayModal(false)
        {setLoader && setLoader(false)}
        return toast.error("Error adding Center");
    } else {
        setDisplayModal(false)
        {setLoader && setLoader(false)}
        return toast.success("Center has been successfully added");
    }
    
}

export const handleAddAdmin = async (data, setDisplayModal, setLoader) => {
    const res = await api.post(`add-admin`, data, {
    })
    {setLoader && setLoader(true)}
    console.log(res)
    if (res?.status >= 400) {
        setDisplayModal(false)
        {setLoader && setLoader(false)}
        return toast.error("Error adding Center");
    } else {
        setDisplayModal(false)
        {setLoader && setLoader(false)}
        return toast.success("Center has been successfully added");
    }
    
}


export const handleAddTestCategory = async(data, setDisplayModal, setLoader) =>{
    const centerId= store.getState().auth.user.center;
    const payload = structuredClone(data);
    payload.centerId = centerId;
    console.log("payload->",payload)
    const res = await addTestCategory(payload);

    console.log(res)
    if (res?.status >= 400) {
        setDisplayModal(false)
        return toast.error("Error adding Center");
    } else {
        setDisplayModal(false)
        return toast.success("Center has been successfully added");
    }
}   

export const handleAddTest = async(data, setDisplayModal, setLoader) =>{
    const centerId= store.getState().auth.user.center;
    const payload = structuredClone(data);
    payload.centerId = centerId;
    const res = await addTest(payload);
    console.log(res)
    if (res?.status >= 400) {
        setDisplayModal(false)
        return toast.error("Error adding Center");
    } else {
        setDisplayModal(false)
        return toast.success("Center has been successfully added");
    }
}   

export const handleAddCase = async(data, onClose,navigate, setLoader) =>{
    const res = await AddCase(data);
    console.log(res)
    if (res?.status >= 400) {
        return toast.error("Error adding Case");
    } else {
        onClose();
        toast.success("Case has been successfully added");
        navigate(`/case-details/${res?.patient?._id}`,{state:{patient:res?.patient}})
    }
}   


export const GenerateOption = (data) =>{
    if(!Array.isArray(data))
    return data;
    const option = data?.map((item)=>({...item, label:item?.name || item?.testName, value:item?._id}))
    console.log(option)
    return option;
}


export { handleLoginAsDoctor, handleLoginAsAdmin, handleLoginAsSuperAdmin, formReducer }