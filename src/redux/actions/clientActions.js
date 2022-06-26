import { ActionTypes } from "../constants/actionTypes"
export const setClient=(clients)=>{
    return {
        type:ActionTypes.SET_CLIENTS,
        payload:clients
    }
}

export const selectedClient=(client)=>{
    return {
        type:ActionTypes.SELECTED_CLIENT,
        payload:client
    }
}