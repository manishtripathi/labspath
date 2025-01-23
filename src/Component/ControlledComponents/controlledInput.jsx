import React, { useState, useCallback } from "react";
import { validate } from "./validate";
import "./controlled.css"

const ControlledInput = ({
  type = "text",
  label,
  value = "",
  rules,
  styles = {},
  className = "",
  onChange = () => {},
  onBlur = () => {},
  error, // External error passed from parent
  ...props
}) => {
  const [localError, setLocalError] = useState("");

  // Handle change and validate input
  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const isInvalid = validate(rules, value, setLocalError);
      onChange(e, isInvalid); // Pass the value and validation status to the parent
    },
    [rules, onChange]
  );

  // Handle blur to validate input
  const handleBlur = useCallback(
    (e) => {
      const { value } = e.target;
      const isInvalid = rules ? validate(rules, value, setLocalError): true;
      onBlur(value, isInvalid); // Trigger onBlur callback
    },
    [rules, onBlur]
  );

  const displayError = localError || error;

  return (
    <div className={`controlled-input-wrapper ${className}`} style={styles.wrapper}>
      {label && (
        <label style={styles.label} className="controlled-input-label">
          {label}
        </label>
      )}
      <div>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          style={styles.input}
          className={`controlled-input ${displayError ? "error" : ""}`}
          {...props}
        />
      </div>
      {displayError && (
        <div style={styles.error} className="controlled-input-error">
          <small style={{ color: "red" }}>{displayError}</small>
        </div>
      )}
    </div>
  );
};

export default React.memo(ControlledInput);
