import './styles.css'

import {ButtonProps} from "../../../types"

const Button = ({type, disabled, text, className = ''}: ButtonProps) => {
    return (
        <button type={type}
                className={`button ${className}`}
                disabled={disabled}>{text}
        </button>
    )
}

export default Button
