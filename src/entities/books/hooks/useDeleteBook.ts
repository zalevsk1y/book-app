import { useDispatch } from 'react-redux';
import { useDebugValue } from 'react'
import { deleteBook } from '../actions/books.actions';


export type DeleteBookHandler = (id: number) => void;
export type UseDeleteBook = () => DeleteBookHandler;

export const useDeleteBook: UseDeleteBook = () => {
    const dispatch = useDispatch();
    useDebugValue('useDeleteBook');
    const deleteBookHandler: DeleteBookHandler = (id) => dispatch(deleteBook(id));
    return deleteBookHandler
}