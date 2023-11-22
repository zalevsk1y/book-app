import React from 'react';

export type TableProps = {
    children: React.ReactNode
}

/**
 * Represents a table component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the table.
 * @returns {JSX.Element} The rendered table component.
 */


export const Table: React.FC<TableProps> = ({ children }) => {
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                {children}
            </table>
        </div>
    )
}