import React from "react"
import {HiChevronDown, HiChevronRight, HiFolderOpen, HiUserCircle} from "react-icons/hi2"
import "yet-another-react-lightbox/styles.css"
import {NavLink, Outlet} from "react-router-dom";

import {Sidebar} from "../../components"
import {withOpacityTransition, withPageStyles} from "../../hoc"

import './styles.css'

import {infoSections} from "../../constants"


const About = () => {

    return (
        <div className="about-content">
            <Sidebar>
                <p className="text-white-text items-center mb-4 md:flex hidden"><HiUserCircle
                    className="w-6 h-6 object-contain mr-2"/> personal_info</p>
                <ul className="md:pl-8 md:mb-8">
                    {infoSections.map(({id, title, to}) => (
                        <li key={id} className="mb-2">
                            <NavLink
                                to={to}
                                className={({isActive}) =>
                                    `${isActive ? 'text-white-text' : 'text-gray-text'} hover:text-white duration-300 transition`
                                }
                            >
                                {({isActive}) => (
                                    <span className="flex gap-2 items-center">
                                        {isActive ? <HiChevronDown/> : <HiChevronRight/>}
                                        <span className="about-sidebar_icon"><HiFolderOpen
                                            className={isActive ? 'text-blue-text' : ''}/></span>
                                        {title}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Sidebar>

            <div className="text-gray-text md:p-8 p-4 flex-1">
                <Outlet/>
            </div>
        </div>
    )
}

export default withOpacityTransition(withPageStyles(About))
