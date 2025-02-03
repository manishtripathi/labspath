import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../redux/toggleSlice";
import CustomForm from "./Forms/CustomForm";
import { loginFields } from "./formFields";
import { loginAsAdmin, loginAsDoctor, loginAsLabCenter } from "../redux/slices/authSlice";
import { handleLoginAsAdmin, handleLoginAsDoctor, handleLoginAsSuperAdmin } from "./commonService";
import { useNavigate } from "react-router-dom";
import MotionLoader from "./Loaders/MotionLoader";

const Toggle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeToggle , setActiveToggle] = useState("Lab Center");
    const [loader, setLoader] = useState(false);

    // Select the `active` state from Redux
    const active = useSelector((state) => {
        console.log("Current Redux State:", state); // Debug state structure
        return state.toggle?.active; // Safeguard with optional chaining
    });

    // Dispatch the action to update state
    const handleToggle = (value) => {
        console.log("Dispatching value:", value); // Debug the value
        // dispatch(setActive(value));
        setActiveToggle(value)
    };

    function handleSubmit(data){
        console.log("form submitted successfully",data);
        if(activeToggle === "Lab Center"){
            handleLoginAsSuperAdmin(data, dispatch, navigate, setLoader)
        }   else if(activeToggle === "Doctor"){
            handleLoginAsDoctor(data, dispatch, navigate, setLoader);
        }   else if(activeToggle === "Admin"){
            handleLoginAsAdmin(data, dispatch, navigate, setLoader);
        }
        
    }

    return (
    <>
    {loader && <MotionLoader/>}
        <div className="login-toggle">
            <button
                style={{
                    backgroundColor: activeToggle === "Lab Center" ? "purple" : "white",
                    color: activeToggle === "Lab Center" ? "white" : "black",
                    border: "1px solid #ccc",
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
                onClick={() => handleToggle("Lab Center")}
            >
                Lab Center
            </button>

            <button
                style={{
                    backgroundColor: activeToggle === "Doctor" ? "purple" : "white",
                    color: activeToggle === "Doctor" ? "white" : "black",
                    border: "1px solid #ccc",
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
                onClick={() => handleToggle("Doctor")}
            >
                Doctor
            </button>

            <button
                style={{
                    backgroundColor: activeToggle === "Admin" ? "purple" : "white",
                    color: activeToggle === "Admin" ? "white" : "black",
                    border: "1px solid #ccc",
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
                onClick={() => handleToggle("Admin")}
            >
                Admin
            </button>
            <CustomForm fields = {loginFields} onSubmit={handleSubmit}/>
        </div>
        </>
    );
};

export default Toggle;
