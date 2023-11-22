import { Book, Books } from '../types/book';
import { books } from '../config/books'

/**
 * Retrieves book data from a form element.
 *
 * @param {HTMLFormElement} formElement - The form element containing the book data.
 * @returns {Book} The book object constructed from the form data.
 */
export const getDataFromForm = (formElement: HTMLFormElement): Book => {
    const newBook: Book = {
        name: (formElement[0] as HTMLInputElement).value,
        price: Math.round((parseFloat((formElement[1] as HTMLInputElement).value) * 100)) / 100,
        category: (formElement[2] as HTMLInputElement).value,
        description: (formElement[3] as HTMLTextAreaElement).value
    };
    return newBook
}
/**
  * Fetches books data asynchronously.
  *
  * @returns {Promise<Books>} A promise that resolves to the books data.
  */
export const fetchBooksData = (): Promise<Books> => {
    return new Promise((resolve) => {
        resolve(books);
    });
}

