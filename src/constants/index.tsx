import {HiEnvelope} from 'react-icons/hi2'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {BsGithub, BsTelegram} from "react-icons/bs";
import {Link} from "../types";

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

export const contacts: Link[] = [
    {
        id: 1,
        text: 'malo2dis@gmail.com',
        link: 'mailto: malo2dis@gmail.com',
        icon: <HiEnvelope className="w-4 h-4 object-contain"/>
    },
    {
        id: 2,
        text: 'Github',
        link: 'https://github.com/xmal0x/',
        icon: <BsGithub className="w-4 h-4 object-contain"/>
    },
    {
        id: 3,
        text: 'Telegram',
        link: 'https://t.me/Kira_Galkin',
        icon: <BsTelegram className="w-4 h-4 object-contain"/>
    },
    {
        id: 4,
        text: 'LinkedIn',
        icon: <FaLinkedin className="w-4 h-4 object-contain"/>,
        link: 'https://www.linkedin.com/in/kgalkin/'
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

export const footerLinks: Link[] = [
    {
        id: 1,
        text: 'Instagram',
        icon: <FaInstagram className="w-6 h-6 object-contain"/>,
        link: 'https://www.instagram.com/kira_galkin/'
    },
    {
        id: 2,
        text: 'LinkedIn',
        icon: <FaLinkedin className="w-6 h-6 object-contain"/>,
        link: 'https://www.linkedin.com/in/kgalkin/'
    },
    {
        id: 3,
        text: 'Facebook',
        icon: <FaFacebook className="w-6 h-6 object-contain"/>,
        link: 'https://www.facebook.com/kirill.galkin'
    },
    {
        id: 4,
        text: 'Twitter',
        icon: <FaTwitter className="w-6 h-6 object-contain"/>,
        link: 'https://twitter.com/kira_galkin'
    },
]

export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
