import { useSelector } from "react-redux"
import { State } from "../../../types/state"
import { useDebugValue } from "react";

export const useGetModalState=()=>{
    useDebugValue('useGetModalState');
    const modalState=useSelector((state:State)=>state.widgets.modal);
    return modalState;
}