import React, { useState, useCallback } from "react";
import { validate } from "./validate";
import "./controlled.css";

const ControlledInputFile = ({
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

  return (
    <div className={`relative controlled-input-wrapper ${className}`} >
      {label && (
        <label className="controlled-input-label" >
          {label}
        </label>
      )}
        <input
          type="file"
        //   value={value}
          onChange={handleChange}
          className={`controlled-input ${displayError ? "error" : ""}`}
          style={{
            width: "100%",
            padding: "0.8rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
          {...props}
        />
      {displayError && (
        <div className="controlled-input-error" style={{ color: "red", fontSize: "0.85rem", marginTop: "0.5rem" }}>
          {displayError}
        </div>
      )}
    </div>
  );
};

export default React.memo(ControlledInputFile);
