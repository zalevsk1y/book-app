import React from 'react';

export type TitleProps = {
    name: string
}

/**
 * Represents a title component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name to be displayed as the title.
 * @returns {JSX.Element} The rendered title component.
 */


export const Title: React.FC<TitleProps> = ({ name }) => {
    return <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>{name}</span>
}