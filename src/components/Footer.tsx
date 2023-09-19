import React from 'react';

const footerLinks = [
    {
        id: 1,
        title: 'Facebook',
        icon: 'HUI',
        link: 'https://facebook.com'
    },
    {
        id: 2,
        title: 'Twitter',
        icon: 'HUI2',
        link: 'https://twitter.com'
    },
]

const Footer = () => {
    return (
        <footer className="static bottom-0 w-full bg-second-dark-bg text-gray-text h-14 border-t border-secondary-gray">
            <div className="flex justify-between px-4 items-center h-full">
                <div className="flex h-full items-center">
                    <span className="mr-4">find_me_in:</span>
                    {footerLinks.map((link, index) => (
                        <div key={link.id} className={`border-l ${index === footerLinks.length - 1 ? 'border-r' : ''} h-full px-4 flex items-center border-secondary-gray`}>
                            <a href={link.link}>{link.icon}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <span>2023</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
