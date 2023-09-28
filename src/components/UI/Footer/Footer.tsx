import React from 'react';
import {footerLinks} from "../../../constants";

const Footer = () => {
    return (
        <footer
            className="fixed bottom-0 w-full bg-second-dark-bg text-gray-text h-14 border-t border-secondary-gray">
            <div className="flex justify-between items-center h-full">
                <div className="flex h-full w-full items-center md:justify-start justify-between">
                    <span className="md:w-48 w-32 pl-4 flex">find_me_in:</span>
                    <div className="flex">
                        {footerLinks.map((link, index) => (
                            <div key={link.id}
                                 className={`border-l ${index === footerLinks.length - 1 ? 'border-r' : ''} 
                             h-full flex items-center border-secondary-gray`}>
                                <a href={link.link} className="hover:text-white p-4" target="_blank"
                                   rel="noreferrer">{link.icon}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:flex hidden w-fit pr-4">
                    <span className="whitespace-nowrap">HoneySoft 2023</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
