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
    const allCenters = store.getState().doctor.allCenters || [];

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
    const allCenters = store.getState().doctor.allCenters || [];

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
     const allCenters = store.getState().doctor.allCenters || [];

    return [
        { name: "name", type: "text", label: "Name", rules: [{ required: true }] },
        { 
            name: "centerId", type: "select", label: "Center",
            options: allCenters.map(center => ({ value: center._id, label: center.name })), 
            rules: [{ required: true }]
        }
    ];
}


export const AddTest = () => [

]