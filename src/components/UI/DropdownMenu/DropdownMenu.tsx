import {Transition} from "@headlessui/react"
import {Fragment} from "react"
import {NavLink} from "react-router-dom"

import {DropdownLinkProps, DropdownMenuProps} from "@types"

import {menuLinks} from "@constants"

const DropdownLink = ({link, title, onClose}: DropdownLinkProps) => {
    return (
        <li className="border-b border-secondary-gray" onClick={onClose}>
            <NavLink
                to={link}
                className={({isActive}) =>
                    `${isActive ? 'text-white-text' : 'text-gray-text'} nav-link`}>
                {title}
            </NavLink>
        </li>
    )
}

const DropdownMenu = ({isVisible, onClose}: DropdownMenuProps) => {
    return (
        <Transition
            show={isVisible}
            as={Fragment}
            enter="transition-opacity duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <ul className="bg-second-dark-bg fixed top-14 left-0 right-0 bottom-14 z-50">
                {menuLinks.map(({link, title, id}, index) => (
                    <DropdownLink onClose={onClose} link={link} title={title} key={id}/>
                ))}
                <DropdownLink onClose={onClose} link="/contacts" title="contact_me"/>
            </ul>
        </Transition>
    )
}

export default DropdownMenu
