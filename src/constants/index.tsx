import {HiEnvelope} from 'react-icons/hi2'
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {BsGithub, BsTelegram} from "react-icons/bs";
import {Link} from "../types";
import {FaAngular, FaCss3, FaDocker, FaFigma, FaGit, FaNodeJs, FaReact, FaSass} from "react-icons/fa6";
import {
    SiDotnet,
    SiExpress,
    SiJavascript,
    SiNextdotjs,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

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
        icon: <HiEnvelope className="contacts-icon"/>
    },
    {
        id: 2,
        text: 'Github',
        link: 'https://github.com/xmal0x/',
        icon: <BsGithub className="contacts-icon"/>
    },
    {
        id: 3,
        text: 'Telegram',
        link: 'https://t.me/Kira_Galkin',
        icon: <BsTelegram className="contacts-icon"/>
    },
    {
        id: 4,
        text: 'LinkedIn',
        icon: <FaLinkedin className="contacts-icon"/>,
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
        icon: <FaInstagram className="footer-link-icon"/>,
        link: 'https://www.instagram.com/kira_galkin/'
    },
    {
        id: 2,
        text: 'LinkedIn',
        icon: <FaLinkedin className="footer-link-icon"/>,
        link: 'https://www.linkedin.com/in/kgalkin/'
    },
    {
        id: 3,
        text: 'Twitter',
        icon: <FaTwitter className="footer-link-icon"/>,
        link: 'https://twitter.com/kira_galkin'
    },
]

export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export const skills = [
    {
        title: 'Docker',
        icon: <FaDocker className="skill-icon"/>
    },
    {
        title: 'React',
        icon: <FaReact className="skill-icon"/>
    },
    {
        title: 'Angular',
        icon: <FaAngular className="skill-icon"/>
    },
    {
        title: '.Net',
        icon: <SiDotnet className="skill-icon"/>
    },
    {
        title: 'Node.js',
        icon: <FaNodeJs className="skill-icon"/>
    },
    {
        title: 'Next.js',
        icon: <SiNextdotjs className="skill-icon"/>
    },
    {
        title: 'Express',
        icon: <SiExpress className="skill-icon"/>
    },
    {
        title: 'Css',
        icon: <FaCss3 className="skill-icon"/>
    },
    {
        title: 'Sass',
        icon: <FaSass className="skill-icon"/>
    },
    {
        title: 'Typescript',
        icon: <SiTypescript className="skill-icon"/>
    },
    {
        title: 'Postgresql',
        icon: <SiPostgresql className="skill-icon"/>
    },
    {
        title: 'Javascript',
        icon: <SiJavascript className="skill-icon"/>
    },
    {
        title: 'Tailwind',
        icon: <SiTailwindcss className="skill-icon"/>
    },
    {
        title: 'Figma',
        icon: <FaFigma className="skill-icon"/>
    },
    {
        title: 'Git',
        icon: <FaGit className="skill-icon"/>
    },
]
