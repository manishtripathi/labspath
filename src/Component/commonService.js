import axios from "axios";
import {toast } from "react-toast"
import { loginAsAdmin, loginAsDoctor } from "../redux/slices/authSlice"
import { toastPromise } from "../redux/toastHandler";
import api from "../redux/apiGateways/apiHandler";
import { addTestCategory } from "../libs/services/doctor-action-api";
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
        debugger
        
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

export const handleAddDoctor = async (data, setDisplayModal, navigate, token, setLoader) => {
    console.log("data for adding doctor", data);
    debugger
    const res = await api.post(`/api/add-doctor`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(res)
    if (res?.status >= 400) {
        setDisplayModal(false)
        return alert("Error adding doctor");
    } else {
        setDisplayModal(false)
        return alert("Dcotor has been successfully added");
    }
}

// add center

export const handleAddcenter = async (data, setDisplayModal, token, setLoader) => {
    const res = await api.post(`/api/add-center`, data, {
    })
    console.log(res)
    if (res?.status >= 400) {
        setDisplayModal(false)
        return alert("Error adding Center");
    } else {
        setDisplayModal(false)
        return alert("Center has been successfully added");
    }
}


export const handleAddTestCategory = async(data, setDisplayModal, setLoader) =>{
    const res = await addTestCategory(data);
    console.log(res)
    if (res?.status >= 400) {
        setDisplayModal(false)
        return toast.error("Error adding Center");
    } else {
        setDisplayModal(false)
        return toast.success("Center has been successfully added");
    }
}   

export { handleLoginAsDoctor, handleLoginAsAdmin, handleLoginAsSuperAdmin, formReducer }