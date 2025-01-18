import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../redux/toggleSlice";

const Toggle = () => {
    const dispatch = useDispatch();

    // Select the `active` state from Redux
    const active = useSelector((state) => {
        console.log("Current Redux State:", state); // Debug state structure
        return state.toggle?.active; // Safeguard with optional chaining
    });

    // Dispatch the action to update state
    const handleToggle = (value) => {
        console.log("Dispatching value:", value); // Debug the value
        dispatch(setActive(value));
    };

    return (
        <div className="login-toggle">
            <button
                style={{
                    backgroundColor: active === "Lab Center" ? "purple" : "white",
                    color: active === "Lab Center" ? "white" : "black",
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
                    backgroundColor: active === "Doctor" ? "purple" : "white",
                    color: active === "Doctor" ? "white" : "black",
                    border: "1px solid #ccc",
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
                onClick={() => handleToggle("Doctor")}
            >
                Doctor
            </button>
        </div>
    );
};

export default Toggle;
