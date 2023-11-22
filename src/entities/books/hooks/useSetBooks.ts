import { useDispatch } from 'react-redux';
import { useDebugValue } from 'react';
import { setBooks } from '../actions/books.actions';
import { Books } from '../../../types/book';
import { useCallback } from 'react';


export type SetBooksHandler = (books: Books) => void;
export type UseSetBooks = () => SetBooksHandler;

export const useSetBooks: UseSetBooks = () => {
    const dispatch = useDispatch();
    useDebugValue('SetBooksHandler');
    const setBookHandler: SetBooksHandler = useCallback((books) => dispatch(setBooks(books)), [dispatch]);
    return setBookHandler;
}