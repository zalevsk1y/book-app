import React, { MouseEventHandler } from 'react';
import { cssAlias } from '../config/css';

export type ButtonProps = {
    color: 'grey' | 'blue',
    onClick: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean;
    children: React.ReactNode
}

/**
 * Represents a button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {'grey'|'blue'} props.color - The color variant of the button ('grey' or 'blue').
 * @param {Function} props.onClick - The event handler for the button click event.
 * @param {boolean} [props.disabled] - Indicates whether the button is disabled.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 * @returns {JSX.Element} The rendered button component.
 */

export const Button: React.FC<ButtonProps> = ({ color, onClick, disabled, children }) => {
    return (
        <button className={cssAlias[`header-${color}-button`]} onClick={onClick} disabled={!!disabled}>
            {children}
        </button>)
}