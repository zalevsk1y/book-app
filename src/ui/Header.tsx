import React from 'react';

export type HeaderProps = {
    children: React.ReactNode
}

/**
 * Represents a header component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the header.
 * @returns {JSX.Element} The rendered header component.
 */


export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header>
            <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    {children}

                </div>
            </nav>
        </header>

    )
}