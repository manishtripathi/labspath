import React, { useCallback, useState } from "react";
import { validate } from "./validate";

const ControlledInput = React.memo(
  ({
    type = "text",
    label = "Label",
    value,
    rules = {}, 
    styles = {}, 
    onChange = () => {},
    ...props
  }) => {
    const [error, setError] = useState();

    const handleComponentChange = useCallback((e)=>{
        debugger
        onChange(e,error?true:false);
    },[])

    const handleBlur = useCallback((e)=>{
        debugger
        const inValid=validate(rules, value, setError);
        onChange(e,inValid?true:false);
    },[value])
    console.log(label,value)
    return (
      <div style={styles.wrapper} className={styles.className || ""}>
        {/* Label */}
        {label && (
          <div style={styles.label}>
            <label>{label}</label>
          </div>
        )}

        {/* Input */}
        <div>
          <input
            type={type}
            value={value}
            onChange={handleComponentChange}
            style={styles.input}
            onBlur={handleBlur}
            {...props}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div style={styles.error} className="error-message">
            <small style={{ color: "red" }}>{error}</small>
          </div>
        )}
      </div>
    );
  }
);

export default ControlledInput;
