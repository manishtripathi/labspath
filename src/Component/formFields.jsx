import store from "../redux/store";

export const loginFields = () => [
    { name: "email", label: "Email", type: "email", rules: [
        { regex: /[.*]/, message: "" },
        { required: true, message: "This is a required Field" },
        { minLength: 3, message: "Minimum required length is 3" }
    ]},
    { name: "password", label: "Password", type: "password", rules: [
        { regex: /[.*]/, message: "" },
        { required: true, message: "This is a required Field" },
        { minLength: 3, message: "Minimum required length is 3" }
    ]}
];

export const AddDoctor = () => {
     debugger
    const allCenters = store.getState().dropDownOptions.allCenters || [];

    return [
        { name: "name", type: "text", label: "Name", rules: [{ required: true }] },
        { name: "specialization", type: "text", label: "Specialization", rules: [{ required: true }] },
        { name: "email", type: "text", label: "Email", rules: [{ required: true }] },
        { name: "password", type: "password", label: "Password", rules: [{ required: true }] },
        { 
            name: "centerId", type: "select", label: "Center",
            options: allCenters.map(center => ({ value: center._id, label: center.name })), 
            rules: [{ required: true }]
        }
    ];
};

export const CenterFields = () => [
    { name: "name", type: "text", label: "Name", rules: [{ required: true }] },
    { name: "location", type: "text", label: "Location", rules: [{ required: true }] }
];

export const AddAdminFields = () => {
    const allCenters = store.getState().dropDownOptions.allCenters || [];

    return [
        { name: "name", type: "text", label: "Name", rules: [{ required: true }] },
        { name: "email", type: "text", label: "Email", rules: [{ required: true }] },
        { name: "password", type: "password", label: "Password", rules: [{ required: true }] },
        { 
            name: "centerId", type: "select", label: "Center",
            options: allCenters.map(center => ({ value: center._id, label: center.name })), 
            rules: [{ required: true }]
        }
    ];
};


export const AddTestCategory = () => {
     const allCenters = store.getState().dropDownOptions.allCenters || [];

    return [
        { name: "name", type: "text", label: "Name", rules: [{ required: true }] },
        { 
            name: "centerId", type: "select", label: "Center",
            options: allCenters.map(center => ({ value: center._id, label: center.name })), 
            rules: [{ required: true }]
        }
    ];
}


export const AddTest = () => {
    const allTests = store.getState().dropDownOptions.allTestCategoy || [];
    return [
        { name: "testName", type: "text", label: "Test Name", rules: [{ required: true }] },
        { name: "shortName", type: "text", label: "Short Name", rules: [{ required: true }] },
        { name: "Unit", type: "text", label: "Unit", rules: [{ required: true }] },
        { 
            name: "normalValues", type: "array", label: "Normal Values", 
            fields: [
                { name: "sex", type: "select", label: "Sex", options: [
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" }
                ], rules: [{ required: true }] },
                { name: "minAge", type: "number", label: "Min Age", rules: [{ required: true }] },
                { name: "MaxAge", type: "number", label: "Max Age", rules: [{ required: true }] },
                { name: "lowerValue", type: "number", label: "Lower Value", rules: [{ required: true }] },
                { name: "UpperValue", type: "number", label: "Upper Value", rules: [{ required: true }] },
            ]
        },
        { name: "category", type: "select", label: "Category", rules: [{ required: true }], options:allTests.map(category => ({ value: category._id, label: category.name })), },
        { name: "rate", type: "number", label: "Rate", rules: [{ required: true }] }
    ];
};
