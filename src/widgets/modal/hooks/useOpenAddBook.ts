import { useCallback,useDebugValue } from "react";
import { useDispatch } from "react-redux"
import { openModal,setModalAction } from "../actions/modal.actions";



export const useOpenAddBook = () => {
    const dispatch = useDispatch();
    useDebugValue('useOpenAddBook');
    const openAddBook = useCallback(() => {
        dispatch(setModalAction('create'));
        dispatch(openModal());
    },[dispatch]);
    return openAddBook;
}