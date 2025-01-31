import { getAllCenters, getdoctor } from "../../redux/slices/doctorSlice";

export const getTableListData = (listName,{token,centerId}, dispatch, setTableData) =>{
    switch (listName) {
        case "center":{
             dispatch(getAllCenters(token)).then((res)=>{
                console.log(res);
                if(res?.payload?.centerList){
                    setTableData(res?.payload?.centerList)
                }
             })
            break;
        }
        case "doctor":{
             dispatch(getdoctor({token,centerId})).then((res)=>{
                console.log(res);
                if(res?.payload?.doctors){
                    setTableData(res?.payload?.doctors)
                }
             });
            break;
        }
        default:
            break;
    }
}