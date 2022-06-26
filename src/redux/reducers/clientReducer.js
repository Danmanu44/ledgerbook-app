import { ActionTypes } from "../constants/actionTypes";
 
const initialState={
    clients:[{
        id: 1655615442470,
        name: "Walker Albert",
        phoneNumber: "+1 (767) 249-2981",
        email: "fyhoba@mailinator.com",
        balance: 0
    }]
}
export const clientReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_CLIENTS:
            return state;
        default:
            return state;
    }
     
}