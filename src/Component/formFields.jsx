export const loginFields = [
    {name:"email", label:"email", type:"email", rules:[
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


export const AddDoctor=[
     {name:"name", type:"text",label:"name", rules:[
          {required:true}
          ]},
     {name:"specialization", type:"text",label:"specialization", rules:[
          {required:true}
          ]},
     {name:"email", type:"text",label:"email", rules:[
          {required:true}
          ]},
     {name:"password", type:"password",label:"password", rules:[
          {required:true}
          ]},
     {name:"centerId", type:"select",label:"center", options:[
          {label:"center 1", value:"center 1"},
          {label:"center 2", value:"center 2"}
     ] ,
     rules:[
          {required:true}
          ]},
]


export const CenterFields = [
     //      {name:"logo", type:"logo",label:"logo", rules:[
     //      {required:true}
     //      ]},
     // {name:"letterHead", type:"letterHead",label:"letterHead", rules:[
     //      {required:true}
     //      ]},
     {name:"name", type:"text",label:"name", rules:[
          {required:true}
          ]},
     {name:"location", type:"text",label:"location", rules:[
          {required:true}
          ]},

     
]


export const AddAdminFields = [
     {name:"name", type:"text",label:"name", rules:[
          {required:true}
          ]},
     {name:"email", type:"text",label:"email", rules:[
          {required:true}
          ]},
     {name:"password", type:"password",label:"password", rules:[
          {required:true}
          ]},
     {name:"centerId", type:"select",label:"center", options:[
          {label:"center 1", value:"center 1"},
          {label:"center 2", value:"center 2"}
     ] ,
     rules:[
          {required:true}
          ]},

]