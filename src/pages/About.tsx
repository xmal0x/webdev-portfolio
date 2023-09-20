import {ChevronDownIcon, ChevronRightIcon, GlobeAltIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import React, {useState} from "react";
import {aboutBio, aboutEducation} from "../data";
import {contactsSections, infoSections} from "../constants";
import {FolderOpenIcon} from "@heroicons/react/24/solid";
import {Sidebar} from "../components";

const ContentContainer = ({text}: { text: React.ReactNode }) => {

    return (
        <div className="text-gray-text p-4">
            {text}
        </div>
    );
}


const About = () => {
    const [selectedSectionId, setSelectedSectionId] = useState(1)
    const isSelected = (id: number) => selectedSectionId == id

    const getContent = (id: number) => {
        switch (id) {
            case 1:
                return (
                    aboutBio
                )
            case 2:
                return (
                    aboutEducation
                )
            case 3:
                return (
                    <div>experience</div>
                )
        }
    }

    return (
        <main className="flex w-full flex-1 relative bg-main-dark-bg">
            <div className="flex text-white-text w-full mx-auto">
                <Sidebar>
                    <p className="text-white-text flex items-center mb-4"><UserCircleIcon
                        className="w-6 h-6 object-contain mr-2"/> personal_info</p>
                    <ul className="pl-7 mb-8">
                        {infoSections.map(({id, title}) => (
                            <li key={id}
                                onClick={() => setSelectedSectionId(id)}
                                className={`flex items-center hover:text-white cursor-pointer mb-2 ${isSelected(id) ? 'text-white-text' : ''}`}>
                                <span className="w-4 h-4 object-contain mr-2">
                                    {isSelected(id)
                                        ? <ChevronDownIcon/>
                                        : <ChevronRightIcon/>}
                                </span>
                                <span className="w-4 h-4 object-contain mr-2"><FolderOpenIcon
                                    className={isSelected(id) ? 'text-blue-text' : ''}/></span>
                                {title}
                            </li>
                        ))}
                    </ul>

                    <p className="text-white-text flex items-center mb-4"><GlobeAltIcon
                        className="w-6 h-6s object-contain mr-2"/> contacts</p>
                    <ul className="pl-7">
                        {contactsSections.map(({id, text, icon}) => (
                            <li key={id}
                                className={`flex items-center hover:text-white cursor-pointer mb-2`}>
                                {icon} {text}
                            </li>
                        ))}
                    </ul>
                </Sidebar>

                <div>
                    {getContent(selectedSectionId)}
                </div>
            </div>
        </main>
    );
};

export default About;
