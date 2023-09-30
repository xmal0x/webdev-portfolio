import {NavLink} from "react-router-dom";
import {NavButtonProps} from "../../../types";

const NavButton = ({link, title, showRightBorder = false}: NavButtonProps) => {
    return (
        <div className={`border-l ${showRightBorder ? 'border-r' : ''} h-full border-secondary-gray`}>
            <NavLink
                to={link}
                className={({isActive}) =>
                    `${isActive ? 'text-white-text border-b-2 border-yellow' : ''} 
                h-full items-center flex hover:text-white transition duration-300`}>
                <span className="px-4">{title}</span>
            </NavLink>
        </div>
    )
}

export default NavButton
