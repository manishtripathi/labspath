import { getAllAdmins, getAllCenters, getAlltest, getAlltestCategorylst, getdoctor } from "../../redux/slices/getDropdownoptionSlice";

export const getTableListData = (listName, dispatch, setTableData,dropdownoptions) =>{
    const {allDoctor,allCenters,alltest,allTestCategory,allAdmins} = dropdownoptions;
    switch (listName) {
        case "center":{
            if(allCenters?.length > 0){
                setTableData(allCenters)
            }
             dispatch(getAllCenters()).then((res)=>{
                console.log(res);
                if(res?.payload?.centerList){
                    setTableData(res?.payload?.centerList)
                }
             })
            break;
        }
        case "doctor":{
            if(allDoctor){
                setTableData(allDoctor)
            }
             dispatch(getdoctor()).then((res)=>{
                console.log(res);
                if(res?.payload?.doctors){
                    setTableData(res?.payload?.doctors)
                }
             });
            break;
        }

        case "admin":{
            if(allAdmins){
                setTableData(allAdmins)
            }
             dispatch(getAllAdmins()).then((res)=>{
                console.log(res);
                if(res?.payload?.admins){
                    setTableData(res?.payload?.admins)
                }
             });
            break;
        }

        case "testCategories":{
            if(allTestCategory){
                setTableData(allTestCategory)
            }
             dispatch(getAlltestCategorylst()).then((res)=>{
                console.log(res);
                if(res?.payload?.testCategories){
                    setTableData(res?.payload?.testCategories)
                }
             });
            break;
        }

        case "tests":{
            if(alltest){
                setTableData(alltest)
            }
             dispatch(getAlltest()).then((res)=>{
                console.log(res);
                if(res?.payload?.tests){
                    setTableData(res?.payload?.tests)
                }
             });
            break;
        }


        default:
            break;
    }
}