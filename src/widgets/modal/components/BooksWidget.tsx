import React from 'react';
import { BookModalWindow } from '../../../ui/BookModalWindow';
import { useUpdateBook } from '../../../entities/books/hooks/useUpdateBook';
import { useCreateBook } from '../../../entities/books/hooks/useCreateBook';
import { getDataFromForm } from '../../../utils/index';
import { Book } from '../../../types/book';
import { useGetModalState } from '../hooks/useGetModalState';
import { useCloseModal } from '../hooks/useCloseModal';

/**
 * Represents a widget for managing books.
 *
 * @component
 * @returns {JSX.Element} The rendered BooksWidget component.
 */


export const BooksWidget = () => {
    const modalState = useGetModalState();
    const closeWidget = useCloseModal();
    const updateBook = useUpdateBook();
    const createBook = useCreateBook();
    let acceptHanler;
    let widgetTitle;
    switch (modalState.action) {
        case 'edit':
            widgetTitle = 'Edit book';
            acceptHanler = (e: React.FormEvent) => {
                e.preventDefault();
                const formElement = e.target as HTMLFormElement;
                const newBook: Book = getDataFromForm(formElement)
                formElement.reset();
                if (modalState?.id !== undefined) {
                    updateBook({ book: newBook, id: modalState?.id })
                }
                closeWidget();
            };
            break;
        case 'create':
            widgetTitle = 'Create book';
            acceptHanler = (e: React.FormEvent) => {
                e.preventDefault();
                const formElement = e.target as HTMLFormElement;
                const newBook: Book = getDataFromForm(formElement)
                formElement.reset();
                createBook(newBook);
                closeWidget();
            };
            break;
        default:
            return null;
    }
    return <BookModalWindow title={widgetTitle} initValues={modalState.initValues} isOpen={modalState.isOpen} onAbort={closeWidget} onSubmit={acceptHanler} />
}