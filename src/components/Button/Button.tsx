// src/components/Button/Button.tsx
import type { FC } from 'react';
import './Button.css';
import type { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    type = 'button'
}) => {
    const buttonClass = `ozenpick-btn ${variant === 'secondary' ? 'secondary' : ''} ${size}`;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            type={type}
            aria-label={label}
        >
            {label}
        </button>
    );
};
