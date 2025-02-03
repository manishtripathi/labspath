import FormModal from "./Component/Modal/FormModal";
import Login from "./Pages/useraccount/Login";


const CommonPage = () => {
    return (
        <>
         <Login/>
         </>
    )
       
    
}
export default CommonPage;

export const getFormModal=(fields, onSubmit)=>{
    console.log(fields);
    return (<FormModal fields ={fields} onSubmit={onSubmit}/>)
}