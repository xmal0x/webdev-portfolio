import {Link} from "react-router-dom";
import {NavButton} from "./index";

const menuLinks = [
    {
        id: 1,
        title: 'hello',
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
    return (
        <header className="fixed z-50 w-full bg-second-dark-bg text-gray-text h-14 border-b border-secondary-gray">
            <nav className="flex justify-between items-center h-full m-auto px-4">
                <div className="flex h-full items-center">
                    <Link to={'/'} className="md:w-48 w-32 md:mr-0 mr-4">
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
        </header>
    );
};

export default Header;
