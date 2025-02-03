import React, { useState, useCallback } from "react";
import { validate } from "./validate";
import "./controlled.css";

const ControlledPassword = ({
  label,
  value = "",
  rules,
  className = "",
  onChange = () => {},
  onBlur = () => {},
  error,
  ...props
}) => {
  const [localError, setLocalError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const isInvalid = validate(rules, value, setLocalError);
      onChange(e, isInvalid);
    },
    [rules, onChange]
  );

  const handleBlur = useCallback(
    (e) => {
      const { value } = e.target;
      const isInvalid = rules ? validate(rules, value, setLocalError) : true;
      onBlur(value, isInvalid);
    },
    [rules, onBlur]
  );

  const displayError = localError || error;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`relative controlled-input-wrapper ${className}`} >
      {label && (
        <label className="controlled-input-label" >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : "password"} // Toggle input type
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`controlled-input ${displayError ? "error" : ""}`}
          style={{
            width: "100%",
            padding: "0.8rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "0.9rem",
            color: "#6C63FF",
          }}
        >
          {isPasswordVisible ? "Hide" : "Show"}
        </button>
      </div>
      {displayError && (
        <div className="controlled-input-error" style={{ color: "red", fontSize: "0.85rem", marginTop: "0.5rem" }}>
          {displayError}
        </div>
      )}
    </div>
  );
};

export default React.memo(ControlledPassword);
