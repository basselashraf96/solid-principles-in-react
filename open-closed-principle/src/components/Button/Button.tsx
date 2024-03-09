import React from 'react'
export interface ButtonProps {
    children: React.ReactNode;
    label: string;
}
const Button = ({ label, children }: ButtonProps): JSX.Element => {
    return (
        <button>
            {label}
            {children}
        </button>
    )
}

export default Button
