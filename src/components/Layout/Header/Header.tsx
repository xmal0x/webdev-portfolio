import {Link, NavLink} from "react-router-dom";
import {NavButton} from "../../index";
import {CgClose, CgMenuGridO} from "react-icons/cg";
import {useState} from "react";

const menuLinks = [
    {
        id: 1,
        title: 'home',
        link: '/',
    },
    {
        id: 2,
        title: 'about_me',
        link: '/about',
    },
    {
        id: 3,
        title: 'projects',
        link: '/projects',
    },
]


const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false)

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
                        onClick={() => setMenuVisible(prevState => !prevState)}
                    >
                        {menuVisible
                            ? <CgClose className="w-8 h-8 object-contain"/>
                            : <CgMenuGridO className="w-8 h-8 object-contain"/>
                        }
                    </button>
                </nav>
            </header>

            {/*Dropdown Menu*/}
            {menuVisible && (
                <ul className="bg-second-dark-bg fixed top-14 left-0 right-0 bottom-14 z-50">
                    {menuLinks.map(({link, title, id}, index) => (
                        <li className="border-b border-secondary-gray p-4" onClick={() => setMenuVisible(false)}
                            key={id}>
                            <NavLink
                                to={link}
                                className={({isActive}) =>
                                    `${isActive ? 'text-white-text' : ''} 
                        h-full items-center text-gray-text flex hover:text-white`}>
                                <span className="px-4">{title}</span>
                            </NavLink>
                        </li>
                    ))}

                    <li className="border-b border-secondary-gray p-4" onClick={() => setMenuVisible(false)}>
                        <NavLink
                            to="/contacts"
                            className={({isActive}) =>
                                `${isActive ? 'text-white-text' : ''} 
                        h-full items-center text-gray-text flex hover:text-white`}>

                            <span className="px-4">contact_me</span>
                        </NavLink>
                    </li>
                </ul>
            )}
        </>
    );
};

export default Header;
