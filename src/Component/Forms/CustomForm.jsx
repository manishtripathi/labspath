import React, { useCallback, useReducer, useState } from "react";
import ControlledInput from "../ControlledComponents/controlledInput";
import { loginFields } from "../formFields";

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

const CustomForm = ({
    fields=[],
    onSubmit=()=>{},
    selectOptionFields=[]
}) => {
  // Initialize state with empty values for each field
  const initialState = loginFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [errorState, setErrorState] = useState(false);

  const handleChange = useCallback((e,error) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
    if(error && !errorState){
        setErrorState(true);
    }
    else if (!error && errorState){
        setErrorState(false);
    }
  },[errorState])

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    if(errorState)
    return console.log("please fix errors before submitting to the form");
    onSubmit(formState);
    // Add validation or API call logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <ControlledInput
          key={field?.name}
          label={field?.label}
          type={field?.type}
          name={field?.name}
          value={formState[field?.name]}
          rules={field?.rules}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Login</button>
    </form>
  );
};

export default CustomForm;
