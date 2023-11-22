import { createAction } from '@reduxjs/toolkit';
import { Books, Book } from '../../../types/book';

const CREATE_BOOK = 'books/book:create';
const DELETE_BOOK = 'books/book:delete';
const UPDATE_BOOK = 'books/book:update';
const SET_BOOKS = 'books:set';


export const setBooks = createAction<Books>(SET_BOOKS);

export const createBook = createAction<Book>(CREATE_BOOK);

export const deleteBook = createAction<number>(DELETE_BOOK);

export const updateBook = createAction<{ book: Book, id: number }>(UPDATE_BOOK);