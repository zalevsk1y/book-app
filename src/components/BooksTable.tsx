import React, { useCallback, useMemo } from 'react';
import { Table } from '../ui/Table';
import { cssAlias } from '../config/css';
import { Books } from '../types/book';
import { useGetBooks } from '../entities/books/hooks/useGetBooks';



export type BooksTableProps = {
    onEdit: (id: number) => void,
    onDelete: (id: number) => void
}

/**
 * Represents a table component for displaying a list of books.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onEdit - The callback function invoked when the edit button is clicked.
 * @param {Function} props.onDelete - The callback function invoked when the delete button is clicked.
 * @returns {JSX.Element} The rendered component.
 */


export const BooksTable: React.FC<BooksTableProps> = ({ onEdit, onDelete }) => {
    const books: Books = useGetBooks();
    const editButtonHandler = useCallback((id: number) => () => onEdit(id), [onEdit]);
    const deleteButtonHandler = useCallback((id: number) => () => onDelete(id), [onDelete])
    const rows = useMemo(() => {
        return books.map((book, id) => (
            <tr className={cssAlias['table-row']} key={book.name}>
                <th scope='row' className={cssAlias['table-row-header']}>
                    {book.name}
                </th>
                <td className='px-6 py-4'>
                    {book.price}
                </td>
                <td className='px-6 py-4'>
                    {book.category}
                </td>
                <td className='px-6 py-4'>
                    {book.description}
                </td>
                <td className='px-6 py-4'>
                    <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline' role='button' onClick={editButtonHandler(id)}>Edit</a>&nbsp;|&nbsp;
                    <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline' role='button' onClick={deleteButtonHandler(id)}>Delete</a>
                </td>
            </tr>
        ))
    }, [books, editButtonHandler, deleteButtonHandler]);
    return (
        <>
            <Table>
                <thead className={cssAlias['table-header']}>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Price
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Category
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Description
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </>
    )
}
