import React, { useCallback, useReducer, useState } from 'react'
import Modal from '../ModalPopUp'
import Select from 'react-select'
import ControlledInput from '../../ControlledComponents/controlledInput'
import ControlledSelect from '../../ControlledComponents/controlledSelect'
import { formReducer } from '../../commonService'
import ControlledPassword from '../../ControlledComponents/controlledPassword'

const FormModal = ({fields, onSubmit, showModal, onClose}) => {
    console.log("fields at formModal-->", fields)

    const initialState = fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});
    
      const [formState, dispatch] = useReducer(formReducer, initialState);
      const [showPopup, setShowPopUp] = useState(true);
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

      const handleSelectChange = useCallback(
        (selectedOption, hasError, name) => {
          const { value } = selectedOption;
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
    <Modal isOpen={showModal} onClose={onClose}>
        <form className='p-4' onSubmit={handleSubmit}>
        <div className=" w-full grid grid-cols-2 justify-between">
            {fields?.map((field)=>{
                if(field?.type === "select"){
                    return(
                        <div className='lg:w-1/3 sm:w-1/2 w-full min-w-72'>
                        <ControlledSelect
                        options={field?.options}
                        name={field?.name}
                        value={field.options?.find((option)=>option.value === formState?.[field.name])}
                        required={field?.required}
                        isMulti={field?.isMulti}
                        isSearchable={field?.isSearchable}
                        onChange={(e,isInvalid)=>handleSelectChange(e,isInvalid, field.name)}
                        error={errorState[field.name]}
                        label = {field.label}
                        rules = {field?.rules}
                        {...field?.props}/>
                        </div>
                    )
                }
                else if(field?.type === "textarea"){
                    return (
                        <textarea></textarea>
                    )
                }
                else if(field?.type === "password"){
                    return (
                        <div className='lg:w-1/3 sm:w-1/2 w-full min-w-72'>
                        <ControlledPassword
                        name={field?.name}
                        value={formState?.[field.name]}
                        required={field?.required}
                        onChange={handleChange}
                        label = {field.label}
                        error={errorState[field.name]}
                        rules = {field?.rules}
                        {...field?.props}
                        />
                        </div>
                    )
                }
                else{
                    return (
                        <div className='lg:w-1/3 sm:w-1/2 w-full min-w-72'>
                        <ControlledInput
                        name={field?.name}
                        value={formState?.[field.name]}
                        required={field?.required}
                        onChange={handleChange}
                        label = {field.label}
                        error={errorState[field.name]}
                        rules = {field?.rules}
                        {...field?.props}
                        />
                        </div>
                    )
                }
            })}
        </div>
            <button className="w-max px-6 py-1 rounded-lg bg-green-600 text-white mt-4">Submit</button>
        </form>
    </Modal>
  )
}

export default FormModal
