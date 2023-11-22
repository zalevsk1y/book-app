import React from 'react'
import { Header } from '../../ui/Header';
import { Title } from '../../ui/Title';
import { Button } from '../../ui/Button';
import { BooksTable } from '../../components/BooksTable';

import { BooksWidget } from '../../widgets/modal/components/BooksWidget';
import { useDeleteBook } from '../../entities/books/hooks/useDeleteBook';
import { useOpenAddBook } from '../../widgets/modal/hooks/useOpenAddBook';
import { useOpenUpdateBook } from '../../widgets/modal/hooks/useOpenUpdateBook';

/**
 * Represents the main component of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */


export const Main = () => {
    const openAddBookHandler = useOpenAddBook();
    const updateBookHandler = useOpenUpdateBook();
    const deleteBookHandler = useDeleteBook();
    return (
        <>
            <Header >
                <Title name="Book App" />
                <div className="flex items-center lg:order-2">
                    <Button color='blue' onClick={openAddBookHandler} >Add Book</Button>
                </div>
            </Header>
            <BooksWidget />
            <div className='sm:container mx-auto mt-3 mb-10'>
                <BooksTable onDelete={deleteBookHandler} onEdit={updateBookHandler} />
            </div>
        </>

    );
}


