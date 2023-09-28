import {ButtonProps} from "../../../types";
import './styles.css'

const Button = ({type, disabled, text, className = ''}: ButtonProps) => {
    return (
        <button type={type}
                className={`button ${className}`}
                disabled={disabled}>{text}
        </button>
    )
}

export default Button
