// src/components/Input/Input.tsx
import type { FC, ChangeEvent } from 'react';
import './Input.css';
import type { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
    label,
    error,
    helperText,
    fullWidth = false,
    inputSize = 'medium',
    variant = 'outlined',
    id,
    onChange,
    className = '',
    ...rest
}) => {
    const inputId = id || `ozenpick-input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const containerClass = `ozenpick-input-container ${fullWidth ? 'full-width' : ''}`;
    const inputClass = `ozenpick-input ${inputSize} ${variant} ${error ? 'error' : ''} ${className}`;
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className={containerClass}>
            <label htmlFor={inputId} className="ozenpick-input-label">
                {label}
            </label>
            <input
                id={inputId}
                className={inputClass}
                onChange={handleChange}
                aria-invalid={!!error}
                {...rest}
            />
            {error && <div className="ozenpick-input-error">{error}</div>}
            {!error && helperText && <div className="ozenpick-input-helper">{helperText}</div>}
        </div>
    );
};
