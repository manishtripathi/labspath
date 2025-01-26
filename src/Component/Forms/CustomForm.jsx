import React, { useCallback, useReducer, useState } from "react";
import ControlledInput from "../ControlledComponents/controlledInput";
import "./form.css";
import ControlledPassword from "../ControlledComponents/controlledPassword";
import { formReducer } from "../commonService";


const CustomForm = ({ fields = [], onSubmit = () => {} }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [errorState, setErrorState] = useState({});

  const handleChange = useCallback(
    (e, hasError) => {
      const { name, value } = e.target;
      dispatch({ type: "UPDATE_FIELD", field: name, value });

      setErrorState((prevErrors) => ({
        ...prevErrors,
        [name]: hasError ? "This field is required" : undefined,
      }));
    },
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrorState = {};
    let hasError = false;

    fields.forEach((field) => {
      const value = formState[field.name]?.trim();
      if (!value) {
        newErrorState[field.name] = "This field is required";
        hasError = true;
      }
    });

    setErrorState(newErrorState);

    if (hasError) {
      console.log("Please fix errors before submitting the form.");
      return;
    }

    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="custom-form" style={{ maxWidth: "400px", margin: "auto" }}>
      {fields.map((field) => {
         
         if(field?.type?.toLowerCase() === ("password" || "pwd")){
        return (
          <ControlledPassword
          key={field.name}
          label={field.label}
          name={field.name}
          value={formState[field.name]}
          rules={field.rules}
          onChange={handleChange}
          error={errorState[field.name]}
          required={field.required}
        />
        )
      } else{
        return (
        <ControlledInput
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={formState[field.name]}
          rules={field.rules}
          onChange={handleChange}
          error={errorState[field.name]}
          required={field.required}
        />
      )}
      })}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <label style={{ display: "flex", alignItems: "center" }}>
          <input type="checkbox" style={{ marginRight: "0.5rem" }} />
          Remember me
        </label>
        <a href="/forgot-password" style={{ color: "#6C63FF", textDecoration: "none" }}>
          Forgot Password?
        </a>
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          backgroundColor: "#6C63FF",
          color: "#fff",
          padding: "0.8rem",
          borderRadius: "8px",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Sign In
      </button>
    </form>
  );
};

export default CustomForm;
