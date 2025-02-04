import React, { useCallback, useEffect, useReducer, useState } from 'react';
import Modal from '../ModalPopUp';
import ControlledInput from '../../ControlledComponents/controlledInput';
import ControlledSelect from '../../ControlledComponents/controlledSelect';
import ControlledPassword from '../../ControlledComponents/controlledPassword';
import ControlledInputFile from '../../ControlledComponents/controlledInputFile';
import { formReducer } from '../../commonService';

const FormModal = ({ fields, onSubmit, showModal, onClose }) => {
    console.log("fields at formModal-->", fields);

    const initialState = fields.reduce((acc, field) => {
        acc[field.name] = field.type === "array" ? [] : "";
        return acc;
    }, {});

    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [errorState, setErrorState] = useState({});

    const handleChange = useCallback((e, hasError, parentField, index) => {
        const { name, value } = e.target;

        if (parentField !== undefined && index !== undefined) {
            const updatedArray = [...(formState[parentField] || [])];
            updatedArray[index] = {
                ...(updatedArray[index] || {}),
                [name]: value
            };
            dispatch({ type: "UPDATE_FIELD", field: parentField, value: updatedArray });
        } else {
            dispatch({ type: "UPDATE_FIELD", field: name, value });
        }

        setErrorState(prevErrors => ({
            ...prevErrors,
            [name]: hasError ? "This field is required" : undefined,
        }));
    }, [formState]);

    const handleFileChange = useCallback((e, hasError) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            dispatch({ type: "UPDATE_FIELD", field: name, value: files[0] });
        }
        setErrorState(prevErrors => ({
            ...prevErrors,
            [name]: hasError ? "This field is required" : undefined,
        }));
    }, []);

    const handleSelectChange = useCallback((selectedOption, hasError, name) => {
        dispatch({ type: "UPDATE_FIELD", field: name, value: selectedOption ? selectedOption.value : "" });

        setErrorState(prevErrors => ({
            ...prevErrors,
            [name]: hasError ? "This field is required" : undefined,
        }));
    }, []);

    const addRow = (name) => {
        dispatch({
            type: "UPDATE_FIELD",
            field: name,
            value: [...(formState[name] || []), {}],
        });
    };

    const removeRow = (name, index) => {
        const updatedArray = [...(formState[name] || [])];
        updatedArray.splice(index, 1);
        dispatch({ type: "UPDATE_FIELD", field: name, value: updatedArray });
    };

    const renderFields = (fields, parentField = undefined, parentIndex = undefined) => {
        return fields.map((field, index) => {
            const fieldName = parentField !== undefined ? `${parentField}[${parentIndex}].${field.name}` : field.name;
            const fieldValue = parentField !== undefined ? formState[parentField]?.[parentIndex]?.[field.name] || "" : formState[field.name];

            if (field.type === "select") {
                return (
                    <ControlledSelect
                        key={fieldName}
                        options={field.options || []}
                        name={field.name}
                        value={field.options?.find(option => option.value === fieldValue) || ""}
                        required={field.required}
                        isMulti={field.isMulti}
                        isSearchable={field.isSearchable}
                        onChange={(e, isInvalid) => handleSelectChange(e, isInvalid, field.name)}
                        label={field.label}
                        error={errorState[fieldName]}
                        rules={ field.rules}
                        {...field.props}
                    />
                );
            } else if (field.type === "password") {
                return (
                    <ControlledPassword
                        key={fieldName}
                        name={field.name}
                        value={fieldValue}
                        required={field.required}
                        onChange={(e, isInvalid) => handleChange(e, isInvalid, parentField, parentIndex)}
                        label={field.label}
                        error={errorState[fieldName]}
                        rules={ field.rules}
                        {...field.props}
                    />
                );
            } else if (field.type === "file") {
                return (
                    <ControlledInputFile
                        key={fieldName}
                        name={field.name}
                        required={field.required}
                        onChange={handleFileChange}
                        label={field.label}
                        error={errorState[fieldName]}
                        rules={ field.rules}
                        {...field.props}
                    />
                );
            } else if (field.type === "array") {
                return (
                    <div key={field.name} className="border p-2">
                        <label>{field.label}</label>
                        {(Array.isArray(fieldValue) ? fieldValue : []).map((_, idx) => (
                            <div key={idx} className="flex gap-2 items-center">
                                {renderFields(field.fields, field.name, idx)}
                                <button type="button" className="text-red-500" onClick={() => removeRow(field.name, idx)}>Remove</button>
                            </div>
                        ))}
                        <button type="button" className="mt-2 text-blue-500" onClick={() => addRow(field.name)}>+ Add Row</button>
                    </div>
                );
            } else {
                return (
                    <ControlledInput
                        key={fieldName}
                        name={field.name}
                        value={fieldValue}
                        required={field.required}
                        onChange={(e, isInvalid) => handleChange(e, isInvalid, parentField, parentIndex)}
                        label={field.label}
                        error={errorState[fieldName]}
                        rules={ field.rules}
                        {...field.props}
                    />
                );
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrorState = {};
        let hasError = false;
        console.log(formState)

        const findError = (fieldsToValidate) =>{
          fieldsToValidate.forEach((field) => {
            if(field.type === "array")
              findError(field.fields);
            else{
            const value = formState[field.name];
            if ((!value || value.trim() === "") && field.required) {
                newErrorState[field.name] = "This field is required";
                hasError = true;
            }
            }
        });
        }

        findError(fields);

        setErrorState(newErrorState);
        if (hasError) return;

        onSubmit(formState);
    };

    return (
        <Modal isOpen={showModal} onClose={onClose}>
            <form className="p-4" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-2 gap-4">
                    {renderFields(fields)}
                </div>
                <button className="w-max px-6 py-2 rounded-lg bg-green-600 text-white mt-4">Submit</button>
            </form>
        </Modal>
    );
};

export default FormModal;













// How This Works ------- For Future Correction and Updation ----------

// FormState will hold values of input fields using usereducer to centralized the form values.
// Formstate store initialstate according to the type of fields you can seee at add row and remove row i am updating formState by updating the fields for array 
// our controlled components pass values to our formmodal so that our form modal can know if any error occurs inside the components related to validatioj\n.
// we are using render fields recursively to handle those form fields which can be in form of array 
// on submit will check that none of fields is empty which is required it also uses recursion to find errors inside component if type is array