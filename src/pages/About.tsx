import {
    ChevronDownIcon,
    ChevronRightIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    PhoneIcon,
    UserCircleIcon
} from "@heroicons/react/24/outline";
import {useState} from "react";

const infoSections = [
    {
        id: 1,
        title: 'bio',
    },
    {
        id: 2,
        title: 'interests',
    },
    {
        id: 3,
        title: 'education',
    },
    {
        id: 4,
        title: 'experience',
    },
]

const contactsSections = [
    {
        id: 1,
        text: 'malo2dis@gmail.com',
        icon: <EnvelopeIcon className="h-4 w-4 object-contain mr-2"/>
    },
    {
        id: 2,
        text: '+1234567890',
        icon: <PhoneIcon className="h-4 w-4 object-contain mr-2"/>
    },
]


const About = () => {
    const [selectedSectionId, setSelectedSectionId] = useState(1)
    const isSelected = (id: number) => selectedSectionId == id

    const getContent = (id: number) => {
        switch (id) {
            case 1:
                return (
                    <div>BIO</div>
                )
            case 2:
                return (
                    <div>Interests</div>
                )
            case 3:
                return (
                    <div>education</div>
                )
            case 4:
                return (
                    <div>experience</div>
                )
        }
    }

    return (
        <main className="flex w-full flex-1 relative bg-main-dark-bg">
            <div className="flex text-white-text w-full mx-auto">
                <div className="lg:w-96 w-72 h-full bg-second-dark-bg p-4 text-gray-text">
                    <p className="text-white flex items-center mb-4"><UserCircleIcon
                        className="w-6 h-6s object-contain mr-2"/> personal_info</p>
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
                                {title}
                            </li>
                        ))}
                    </ul>

                    <p className="text-white flex items-center mb-4"><GlobeAltIcon
                        className="w-6 h-6s object-contain mr-2"/> contacts</p>
                    <ul className="pl-7">
                        {contactsSections.map(({id, text, icon}) => (
                            <li key={id}
                                className={`flex items-center hover:text-white cursor-pointer mb-2`}>
                                {icon} {text}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    {getContent(selectedSectionId)}
                </div>
            </div>
        </main>
    );
};

export default About;
