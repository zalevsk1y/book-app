import { useState, useDebugValue } from 'react';
import { Books } from '../../../types/book';
import { books } from '../../../config/books';

export type IsError = boolean;
export type IsFetching = boolean;
export type StartFetching = () => void;
export type UseFetchBooks = () => [IsFetching, IsError, Books, StartFetching]

export const useFetchbooks: UseFetchBooks = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    useDebugValue('useFetchbooks');
    const [, setBooks] = useState<Books>([]);
    const startFetching = () => {
        setIsFetching(true);
        setIsError(false);
        (new Promise<Books>((resolve) => resolve(books)))
            .then((booksData) => setBooks(booksData))
            .catch(() => setIsError(true))
            .finally(() => setIsFetching(false))
    }
    return [isFetching, isError, books, startFetching]
}