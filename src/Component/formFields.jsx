export const loginFields = [
    {name:"email", label:"email", type:"email", rules:[
         { regex:/[.*]/ , message:""},
         {required:true, message:"This is a required Field"},
         {minLength:3,message:"Minimum required length is 3"}
         ]},
    {name:"fullName", label:"full name", type:"text", rules:[
         { regex:/[.*]/ , message:""},
         {required:true, message:"This is a required Field"},
         {minLength:3,message:"Minimum required length is 3"}
         ]},
    {name:"password", label:"password", type:"password", rules:[
         { regex:/[.*]/ , message:""},
         {required:true, message:"This is a required Field"},
         {minLength:3,message:"Minimum required length is 3"}
         ]}
]

