import React, { useCallback, useReducer, useState } from "react";
import ControlledInput from "../ControlledComponents/controlledInput";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const CustomForm = ({ fields = [], onSubmit = () => {} }) => {
  // Initialize state dynamically based on provided fields
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = ""; // Default value for each field
    return acc;
  }, {});

  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [errorState, setErrorState] = useState({}); // Track errors for each field

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
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <ControlledInput
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={formState[field.name]}
          rules={field.rules}
          onChange={handleChange}
          error={errorState[field.name]}
          required = {field.required} // Pass error state to the input
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
