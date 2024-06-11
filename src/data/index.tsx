import {AiOutlineGithub} from "react-icons/ai"
import {FaPlayCircle} from "react-icons/fa"

import {
    car_catalog,
    dashboard,
    earth_landing,
    photo1,
    photo1_t,
    photo2,
    photo2_t,
    photo3,
    photo3_t,
    photo4,
    photo4_t,
    photo5,
    photo5_t,
    photo6,
    photo6_t
} from "../assets"
import {CareerStage, TextContent} from "@types"

export const aboutBio: TextContent = {
    title: 'Hello everyone!',
    paragraphs: [
        `My name is Kirill`,

        `I began my professional journey in 2014, starting with backend development and later transitioning to frontend. 
        I have experience working with Angular, React, and I enjoy working with these technologies.`,

        `I'm not a fan of overengineering, as I believe that beauty lies in simplicity (like Nirvana's songs;)). 
        My primary skill is the ability to solve tasks within tight deadlines. 
        I also place great value on teamwork because I believe that a good team can rescue even a challenging project, 
        while a poor one can spoil a good one. 
        I'm always open to learning new technologies and consider continuous learning the key to success!`,

        `I find inspiration in traveling, playing the guitar, and street photography. 
        I have a wonderful dog named Ozzy who is always by my side on my adventures`,

        `If you have any projects, ideas, or interesting proposals, please don't hesitate to get in touch. 
        I'm always ready for new challenges!`,

        `I look forward to the opportunity to collaborate`
    ]
}

export const aboutEducation: TextContent = {
    title: 'Some words about my background',
    paragraphs: [
        `I successfully completed my studies at the Faculty of Radio Engineering and Electronics and earned an engineering degree.
        After several years of working in this field, my passion for software development grew stronger`,

        `My education has equipped me with solid problem-solving skills and analytical thinking. 
        I appreciate the continuous learning process that accompanies programming, 
        and I always strive to expand my knowledge and skills, both through self-study and by taking various courses`,

        `Throughout my professional career, I have worked as a backend developer, full-stack developer, and currently, 
        I have focused on frontend development, which brings me great satisfaction. 
        Thanks to diverse roles and projects, 
        I have accumulated a wealth of experience working with various technologies and solving a wide range of problems`,

        `If you have any questions or if you have interesting collaboration proposals, please feel free to reach out to me!`,
        `I am always open to discussions and look forward to potential collaborations`,
    ]
}

export const projects = [
    {
        id: 1,
        title: 'car_catalog',
        description: 'Web application that provides information about automobiles',
        image: car_catalog,
        tags: ['tailwind', 'nextjs', 'react', 'typescript', 'nextauth', 'mongodb'],
        links: [
            {
                icon: <AiOutlineGithub className="w-6 h-6 object-contain mr-2"/>,
                title: 'Code',
                url: 'https://github.com/xmal0x/carCat'
            },
            {
                icon: <FaPlayCircle className="w-6 h-6 object-contain mr-2"/>,
                title: 'Demo',
                url: 'https://car-ld4hgg1ib-xmal0xs-projects.vercel.app/'
            },
        ]
    },
    {
        id: 2,
        title: 'earth_life',
        description: 'This page is dedicated to making a positive impact on our planet',
        image: earth_landing,
        tags: ['tailwind', 'react', 'typescript'],
        links: [
            {
                icon: <AiOutlineGithub className="w-6 h-6 object-contain mr-2"/>,
                title: 'Code',
                url: 'https://github.com/xmal0x/earth-life-landing'
            },
            {
                icon: <FaPlayCircle className="w-6 h-6 object-contain mr-2"/>,
                title: 'Demo',
                url: 'https://earth-life-landing.vercel.app/'
            },
        ]
    },
    {
        id: 3,
        title: 'dashboard',
        description: 'Dashboard interface, with theme selection and chat interface',
        image: dashboard,
        tags: ['tailwind', 'react', 'typescript', 'apexcharts'],
        links: [
            {
                icon: <AiOutlineGithub className="w-6 h-6 object-contain mr-2"/>,
                title: 'Code',
                url: 'https://github.com/xmal0x/Dashboard'
            },
            {
                icon: <FaPlayCircle className="w-6 h-6 object-contain mr-2"/>,
                title: 'Demo',
                url: 'https://dashboard-tau-brown.vercel.app/'
            },
        ]
    },
]

export const career: CareerStage[] = [
    {
        id: 5,
        companyName: 'Ufarm.Digital',
        start: new Date('2024-02-01'),
        position: 'Lead Frontend Engineer',
        technology: ['react', 'web3', 'typescript'],
        tasks: [
            'Developing intuitive, user-friendly interfaces for interacting with decentralized applications (dApps)',
            'Implementing connections to blockchain networks using Web3 libraries such as wagmi or ethers.js',
            'Interacting with smart contracts deployed on the blockchain to read data and trigger transactions',
            'Refactoring',
            'Code review process, discuss best practices',
            'Conduct thorough assessments of tasks',
            'Engage in discussions to streamline operations, optimize efficiency, and resolve conflicts, cultivating a culture of transparency and collaboration',
        ]
    },
    {
        id: 4,
        companyName: 'Zyfra',
        start: new Date('2022-02-01'),
        end: new Date('2023-07-01'),
        position: 'Frontend Engineer',
        technology: ['node.js', 'angular', 'typescript'],
        tasks: [
            'Creating user interfaces and client-side components using the Angular framework to build interactive and responsive web applications',
            'Collaborating with existing codebases, understanding and adapting to code written by others, and ensuring its integration into ongoing projects',
            'Improving code quality and maintainability by reorganizing and optimizing existing code without changing its external behavior',
            'Enhancing code and application performance to improve speed, resource utilization, and overall efficiency.',
            'Identifying, diagnosing, and fixing errors and issues in applications to ensure their smooth operation',
            'Designing, implementing, and integrating new features and functionalities to enhance the capabilities of existing applications',
            'Updating and modernizing old code components and functionality to align with current standards and requirements, while maintaining compatibility with the existing system',
            'Actively participating in task evaluation and architectural discussions to collaboratively develop the best solutions for the project',
        ]
    },
    {
        id: 3,
        companyName: 'Murano Software',
        start: new Date('2020-09-01'),
        end: new Date('2022-02-01'),
        position: 'Fullstack Engineer',
        technology: ['.net', 'postgresql', 'typescript', 'angular', 'react'],
        tasks: [
            'Frontend development using Angular and React, creating user interfaces and client-side components for applications',
            'Backend development using the .NET platform, including the creation of reliable and scalable server-side components and applications',
            'Working with existing code, which involves analyzing, adapting, and making modifications to someone else\'s code to improve its readability and maintainability',
            'Conducting code refactoring to enhance its structure, cleanliness, and efficiency',
            'Optimizing code and application architecture to improve performance and resource efficiency',
            'Analyzing and resolving errors in applications, including identifying and rectifying various issues and misunderstandings',
            'Developing new functionality, including adding new features and modules to existing applications',
            'Rewriting old functionality, updating and modernizing existing components and modules to meet modern standards and requirements',
        ]
    },
    {
        id: 2,
        companyName: 'Elva',
        start: new Date('2017-11-01'),
        end: new Date('2020-09-01'),
        position: 'Lead Fullstack Engineer',
        technology: ['.net', 'javascript', 'mssql', 'postgresql', 'typescript', 'angular', 'react'],
        tasks: [
            'Frontend development using Angular and React, to create engaging and user-friendly interfaces',
            'Software development on the .NET platform, creating robust and scalable applications',
            'Collaborating with existing codebases, conducting code refactoring, and optimizing performance for enhanced efficiency',
            'SWR-PDM platform development, including the creation of modules that seamlessly link product structures with documentation',
            'Designing and implementing web services to facilitate data exchange and communication',
            'Developing plugins and business processes within the Microsoft Dynamics CRM environment to enhance its capabilities',
            'Playing a crucial role in project planning, including project design and assessment, ensuring the successful execution of software development projects',
            'Authoring informative articles about products and solutions for the company\'s website to enhance product awareness and knowledge sharing',
            'Mentoring and supervising junior developers through internship programs, fostering their growth and development within the team',
        ]
    },
    {
        id: 1,
        companyName: 'BIA',
        start: new Date('2016-09-01'),
        end: new Date('2017-11-01'),
        position: 'Developer',
        technology: ['.net', 'javascript', 'mssql'],
        tasks: [
            'Designing and building a warehouse management platform',
            'Crafting custom scripts tailored to specific needs',
            'Formulating intricate database queries, procedures, and functions to efficiently handle data',
            'Developing specialized services to seamlessly import data into the system and facilitate smooth data exchanges with clients',
            'Providing continuous support and maintenance for the system to ensure its uninterrupted functionality',
            'Engaging in code refactoring, scrutinizing third-party code for improvements, identifying and rectifying errors, and optimizing performance for enhanced efficiency',
        ]
    },
]

export const images = [
    {
        src: photo1_t,
        original: photo1,
        width: 422,
        height: 318,
        caption: "high point",
    },
    {
        src: photo3_t,
        original: photo3,
        width: 318,
        height: 422,
        caption: "with Ozz at home",
    },
    {
        src: photo6_t,
        original: photo6,
        width: 478,
        height: 466,
        caption: "on the wall",
    },
    {
        src: photo5_t,
        original: photo5,
        width: 404,
        height: 304,
        caption: "wonderful world",
    },
    {
        src: photo2_t,
        original: photo2,
        width: 422,
        height: 316,
        caption: "with Ozz",
    },
    {
        src: photo4_t,
        original: photo4,
        width: 318,
        height: 422,
        caption: "sweet life",
    },
]
