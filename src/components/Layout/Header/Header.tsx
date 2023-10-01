import {Link} from "react-router-dom"
import {CgClose, CgMenuGridO} from "react-icons/cg"
import {useState} from "react"

import {DropdownMenu, NavButton} from "../../index"

import './styles.css'

import {menuLinks} from "../../../constants"

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => setMenuVisible(!menuVisible)

    return (
        <>
            <header className="fixed z-50 w-full bg-second-dark-bg text-gray-text h-14 border-b border-secondary-gray">
                {/*Desktop*/}
                <nav className="justify-between items-center h-full m-auto md:flex hidden">
                    <div className="flex h-full items-center">
                        <Link to={'/'} className="md:w-48 w-32 md:mr-0 mr-4 pl-4">
                            <span>kirill_galkin</span>
                        </Link>
                        {menuLinks.map((link, index) => (
                            <NavButton {...link} key={link.id} showRightBorder={index === menuLinks.length - 1}/>
                        ))}
                    </div>

                    <div className="h-full">
                        <NavButton link="/contacts" title="contact_me" showRightBorder={true}/>
                    </div>
                </nav>

                {/*Mobile/Tablet*/}
                <nav className="md:hidden flex justify-between items-center h-full px-4">
                    <Link to={'/'} className="md:w-48 w-32 md:mr-0 mr-4">
                        <span>kirill_galkin</span>
                    </Link>

                    <button
                        className="hover:text-white"
                        onClick={toggleMenu}
                    >
                        {menuVisible
                            ? <CgClose className="w-8 h-8 object-contain"/>
                            : <CgMenuGridO className="w-8 h-8 object-contain"/>
                        }
                    </button>
                </nav>
            </header>

            {/*Dropdown Menu*/}
            <DropdownMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)}/>
        </>
    )
}

export default Header
