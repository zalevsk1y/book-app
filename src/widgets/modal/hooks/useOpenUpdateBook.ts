import { useCallback, useDebugValue } from "react";
import { useDispatch } from "react-redux"
import { openModal, setId, setInitValues,setModalAction } from "../actions/modal.actions";
import { useGetBooks } from "../../../entities/books/hooks/useGetBooks";


export const useOpenUpdateBook = () => {
    const dispatch = useDispatch();
    const books=useGetBooks();
    useDebugValue('useOpenUpdateBook');
    const openUpdate = useCallback((id: number) => {
        dispatch(setId(id));
        dispatch(setModalAction('edit'));
        dispatch(setInitValues(books[id]));
        dispatch(openModal());
    }, [books,dispatch]);
    return openUpdate;
}