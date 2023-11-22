import { useDebugValue } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/books.actions';
import { Book } from '../../../types/book';

export type CreateBookHandler = (book: Book) => void;
export type UseCreateBook = () => CreateBookHandler;

export const useCreateBook: UseCreateBook = () => {
    const dispatch = useDispatch();
    useDebugValue('useCreateBook');
    const createBookHandler: CreateBookHandler = (book) => dispatch(createBook(book));
    return createBookHandler
}