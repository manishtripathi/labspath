import React, { useState, useCallback } from "react";
import { validate } from "./validate";
import "./controlled.css";
import Select from "react-select";

const ControlledInput = ({
    type,
    options,
    label,
    name,
    value = "",
    rules,
    required,
    isMulti,
    isSearchable,
    className = "",
    onChange = () => { },
    onBlur = () => { },
    error,
    ...props
}) => {
    const [localError, setLocalError] = useState("");

    const handleChange = useCallback(
        (selectedOption) => {
            const { value } = selectedOption;
            const isInvalid = validate(rules, value, setLocalError);
            onChange(selectedOption, isInvalid);
        },
        [rules, onChange]
    );

    const handleBlur = useCallback(
        (selectedOption) => {
            const { value } = selectedOption
            const isInvalid = rules ? validate(rules, value, setLocalError) : true;
            onBlur(value, isInvalid);
        },
        [rules, onBlur]
    );

    const displayError = localError || error;

    return (
        <>
            {label && (
                <label className="controlled-input-label" >
                    {label}
                </label>
            )}
            <Select
                options={options}
                name={name}
                value={value}
                required={required}
                isMulti={isMulti}
                isSearchable={isSearchable}
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                className={` ${displayError ? "error" : ""}`}

                {...props}
            />
            {displayError && (
                <div className="controlled-input-error" >
                    {displayError}
                </div>
            )}
            </>
    );
};

export default React.memo(ControlledInput);
