import { useCallback, useDebugValue } from "react";
import { useDispatch } from "react-redux"
import { closeModal } from "../actions/modal.actions";


export const useCloseModal=()=>{
    const dispatch=useDispatch();
    useDebugValue('useCloseModal');
    const closeWidget=useCallback(()=>dispatch(closeModal()),[dispatch]);
    return closeWidget;
}