import {HiOutlineEnvelope, HiPhone} from 'react-icons/hi2'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

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

export const filters = [
    {
        id: 1,
        title: 'React',
        value: 'react',
        image: ''
    },
    {
        id: 2,
        title: 'Typescript',
        value: 'typescript',
        image: ''
    },
    {
        id: 3,
        title: 'Javascript',
        value: 'javascript',
        image: ''
    },
    {
        id: 4,
        title: 'Next.js',
        value: 'nextjs',
        image: ''
    },
    {
        id: 5,
        title: 'Tailwind',
        value: 'tailwind',
        image: ''
    },
    {
        id: 6,
        title: 'MongoDB',
        value: 'mongodb',
        image: ''
    },
]

export const footerLinks = [
    {
        id: 1,
        title: 'Instagram',
        icon: <FaInstagram className="w-6 h-6 object-contain"/>,
        link: 'https://www.instagram.com/kira_galkin/'
    },
    {
        id: 2,
        title: 'LinkedIn',
        icon: <FaLinkedin className="w-6 h-6 object-contain"/>,
        link: 'https://www.linkedin.com/in/kgalkin/'
    },
    {
        id: 3,
        title: 'Facebook',
        icon: <FaFacebook className="w-6 h-6 object-contain"/>,
        link: 'https://www.facebook.com/kirill.galkin'
    },
    {
        id: 4,
        title: 'Twitter',
        icon: <FaTwitter className="w-6 h-6 object-contain"/>,
        link: 'https://twitter.com/kira_galkin'
    },
]

export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
