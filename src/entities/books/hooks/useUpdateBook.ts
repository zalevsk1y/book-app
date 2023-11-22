import { useDispatch } from 'react-redux';
import { useDebugValue } from 'react';
import { updateBook } from '../actions/books.actions';
import { Book } from '../../../types/book';


export type UpdateBookHandler = (bookUpdateDate: { book: Book, id: number }) => void;
export type UseUpdateBook = () => UpdateBookHandler;

export const useUpdateBook: UseUpdateBook = () => {
    const dispatch = useDispatch();
    useDebugValue('useUpdateBook');
    const updateBookHandler: UpdateBookHandler = (bookUpdateDate) => dispatch(updateBook(bookUpdateDate));
    return updateBookHandler
}