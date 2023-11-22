import React from 'react';
import { ModalWindow, ModalWindowProps } from './ModalWindow';
import { Book } from '../types/book';

export type BookModalWindowProps = Omit<ModalWindowProps, 'children'> & {
    initValues?: Book
}

/**
 * Represents a modal window component for displaying book details or form.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Book} props.initValues - The initial values for the book fields.
 * @returns {JSX.Element} The rendered component.
 */


export const BookModalWindow: React.FC<BookModalWindowProps> = ({ initValues, ...props }) => {
    return (
        <ModalWindow  {...props}>
            <div>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                <input type='text' name='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='Book name' defaultValue={initValues ? initValues.name : ''} required></input>
            </div>
            <div>
                <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Price</label>
                <input type='number' name='price' id='price' step={0.01} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='1-1000' defaultValue={initValues ? initValues.price : ''} required></input>
            </div>
            <div>
                <label htmlFor='category' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Category</label>
                <input type='text' name='category' id='category' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='Category' defaultValue={initValues ? initValues.category : ''} required></input>
            </div>
            <div>
                <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Description</label>
                <textarea rows={3} name='description' id='description' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='Description' required defaultValue={initValues ? initValues.description : ''} spellCheck></textarea>
            </div>
        </ModalWindow>
    )
}

