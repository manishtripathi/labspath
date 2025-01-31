import axios from "axios";
import { loginAsAdmin, loginAsDoctor } from "../redux/slices/authSlice"
const BASE_URL = import.meta.env.VITE_BASE_URL;
const handleLoginAsDoctor = (data, dispatch, navigate) => {
    dispatch(loginAsDoctor(data)).then((res) => {
        if (res?.status >= 400) {
            alert("Error Logging in ")
        } else {
            navigate("/dashboard");
        }
    })
        .catch((err) => {
            console.error(err);
            alert("Error logging in");
        })
}

const handleLoginAsAdmin = (data, dispatch, navigate) => {
    dispatch(loginAsAdmin(data)).then((res) => {
        if (res?.status >= 400) {
            alert("Error Logging in ")
        } else {
            navigate("/dashboard");
        }
    })
        .catch((err) => {
            console.error(err);
            alert("Error logging in");
        })
}

const handleLoginAsSuperAdmin = (data, dispatch, navigate) => {
    dispatch(loginAsDoctor(data)).then((res) => {
        if (res?.status >= 400) {
            alert("Error Logging in ")
        } else {
            navigate("/dashboard");
        }
    })
        .catch((err) => {
            console.error(err);
            alert("Error logging in");
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

export const handleAddDoctor = async (data, setDisplayModal, navigate, token) => {
    console.log("data for adding doctor", data);
    debugger
    const res = await axios.post(`${BASE_URL}/api/add-doctor`, data, {
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

export const handleAddcenter = async (data, setDisplayModal, token) => {
    const res = await axios.post(`${BASE_URL}/api/add-center`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
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

export { handleLoginAsDoctor, handleLoginAsAdmin, handleLoginAsSuperAdmin, formReducer }