import type { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** El label que se muestra junto al input */
    label: string;
    /** El mensaje de error a mostrar */
    error?: string;
    /** El texto de ayuda a mostrar debajo del input */
    helperText?: string;
    /** Si el input debe ocupar todo el ancho disponible */
    fullWidth?: boolean;
    /** El tamaño del input */
    inputSize?: 'small' | 'medium' | 'large';
    /** El estado del input */
    variant?: 'outlined' | 'filled';
}
