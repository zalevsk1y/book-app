import { useSelector } from 'react-redux';
import { Books } from '../../../types/book';
import { State } from '../../../types/state';
import { useDebugValue } from 'react';


export type UseGetBooks = () => Books;

export const useGetBooks: UseGetBooks = () => {
    useDebugValue('useGetBooks');
    const books = useSelector((state: State) => state.books);
    return books;
}