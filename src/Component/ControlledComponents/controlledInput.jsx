import React, { useCallback, useState } from "react";
import { validate } from "./validate";

const ControlledInput = React.memo(
  ({
    type = "text",
    label = "Label",
    value = "",
    rules = {},
    styles = {},
    onChange = () => {},
    error, // Accept error passed from parent
    ...props
  }) => {
    const [localError, setLocalError] = useState();

    const handleComponentChange = useCallback(
      (e) => {
        const { value } = e.target;
        const isInvalid = validate(rules, value, setLocalError);
        onChange(e, isInvalid);
      },
      [rules, onChange]
    );

    const handleBlur = useCallback(
      (e) => {
        const isInvalid = validate(rules, e.target.value, setLocalError);
        onChange(e, isInvalid);
      },
      [rules, onChange]
    );

    const displayError = localError || error;
    console.log(displayError, localError);

    return (
      <div style={styles.wrapper} className={styles.className || ""}>
        {label && (
          <div style={styles.label}>
            <label>{label}</label>
          </div>
        )}
        <div>
          <input
            type={type}
            value={value}
            onChange={handleComponentChange}
            onBlur={handleBlur}
            style={styles.input}
            {...props}
          />
        </div>
        {displayError && (
          <div style={styles.error} className="error-message">
            <small style={{ color: "red" }}>{displayError}</small>
          </div>
        )}
      </div>
    );
  }
);

export default ControlledInput;
