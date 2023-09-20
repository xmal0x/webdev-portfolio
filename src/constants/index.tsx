import {HiOutlineEnvelope, HiPhone} from 'react-icons/hi2'

export const infoSections = [
    {
        id: 1,
        title: 'about_me',
    },
    {
        id: 2,
        title: 'education',
    },
    {
        id: 3,
        title: 'experience',
    },
]

export const contactsSections = [
    {
        id: 1,
        text: 'malo2dis@gmail.com',
        icon: <HiOutlineEnvelope className="h-4 w-4 object-contain mr-2"/>
    },
    {
        id: 2,
        text: '+1234567890',
        icon: <HiPhone className="h-4 w-4 object-contain mr-2"/>
    },
]
