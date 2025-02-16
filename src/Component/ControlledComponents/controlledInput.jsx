import React, { useState, useCallback } from "react";
import { validate } from "./validate";
import "./controlled.css";

const ControlledInput = ({
  type = "text",
  label,
  value = "",
  rules,
  title,
  className = "",
  onChange = () => {},
  onBlur = () => {},
  error,
  
  ...props
}) => {
  const [localError, setLocalError] = useState("");

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
  debugger
  const displayError = localError || error;

  return (
    <div className={`controlled-input-wrapper ${className}`} >
      {label && (
        <label className="controlled-input-label" >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`controlled-input ${displayError ? "error" : ""}`}
        
        {...props}
      />
      {/* {title && (
        <div className="titledescription">
          {title}
        </div>
      )} */}
      {displayError && (
        <div className="controlled-input-error" >
          {displayError}
        </div>
      )}
    </div>
  );
};

export default React.memo(ControlledInput);
