import type { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** The text to display inside the button */
    label: string;
    /** The variant style to apply to the button */
    variant?: 'primary' | 'secondary';
    /** The size of the button */
    size?: 'small' | 'medium' | 'large';
}

export declare const Button: FC<ButtonProps>; 