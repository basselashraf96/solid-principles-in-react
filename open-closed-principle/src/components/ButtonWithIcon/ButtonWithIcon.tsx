import React from 'react'
import Button from '../Button/Button.tsx'

interface ButtonWithIconProps {
    label:string;
    icon: string;
    name: string;
}
const ButtonWithIcon = ({ label, icon, name }: ButtonWithIconProps) => {
    return (
        <Button label={label}>
            <img src={icon} alt={name} />
        </Button>
    )
}

export default ButtonWithIcon
