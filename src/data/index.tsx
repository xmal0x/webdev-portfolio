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
} from "../assets";
import {AiOutlineGithub} from "react-icons/ai";
import React from "react";
import {CareerStage, TextContent} from "../types";
import {FaPlayCircle} from "react-icons/fa";

export const aboutBio: TextContent = {
    title: 'Hello everyone!',
    paragraphs: [
        `My name is Kirill, and I'm a web developer:)`,
        `I've been involved in development for over 7 years now. 
        I started with .NET on the backend but transitioned to full-stack development, and it seems that's 
        where I truly appreciated the beauty of frontend work. For a long time, I worked with Angular, 
        but recently, I've been captivated by React, and I can't seem to get enough of it at the moment.`,
        `In my work, I highly value teamwork because, in my opinion,
        a good team can salvage a bad project, while a bad team can ruin a good project.
        I'm open to learning new things, i believe that continuous learning is the key to success in our industry.
        So feel free to reach out with any questions.`,
        `Furthermore, aside from my work, I have a passion for traveling, playing the guitar, and indulging in street
        photography. I find these hobbies to be a great source of inspiration and creativity. I'm also the proud
        owner of a wonderful Griffon dog named Ozzy, who is my loyal companion on my adventures.`,
        `If you have any projects, ideas, or simply interesting propositions,
        please don't hesitate to get in touch.
        I'm always ready for new challenges and look forward to the opportunity to
        collaborate with you.`
    ]
}

export const aboutEducation: TextContent = {
    title: 'Some words about my education.',
    paragraphs: [
        `I hold an engineering degree and graduated from the Faculty of Radio Engineering and Electronics,
            specializing
            in Multichannel Telecommunication Systems. After working as an engineer for several years, I found myself
            increasingly drawn to software development.`,
        `My educational background in engineering has provided me with a strong foundation in problem-solving and
            analytical thinking, which I have found to be valuable in my transition to a software development career. I
            enjoy the continuous learning process that comes with programming and always strive to expand my knowledge
            and
            skill set. This commitment to ongoing education allows me to stay current with the ever-evolving landscape
            of
            technology and programming languages.`,
        `If you have any questions or opportunities for collaboration, please don't hesitate to reach out. I'm
            dedicated
            to delivering high-quality work and am excited to be a part of innovative projects in the software
            development
            field.`
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
        title: 'earth_life_landing',
        description: 'This landing page is dedicated to making a positive impact on our planet.',
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
        title: 'dashboard_interface',
        description: 'This project is a versatile dashboard interface, with theme selection and chat interface.',
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
        id: 4,
        companyName: 'Zyfra',
        start: new Date('2022-02-01'),
        end: new Date('2023-07-01'),
        position: 'Frontend Developer',
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
        position: 'Fullstack Developer',
        technology: ['.net', 'postgresql', 'typescript', 'angular'],
        tasks: [
            'Frontend development using Angular, creating user interfaces and client-side components for applications',
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
        position: 'Senior Developer',
        technology: ['.net', 'javascript', 'mssql', 'postgresql', 'typescript', 'angular', 'react'],
        tasks: [
            'Software development on the .NET platform, creating robust and scalable applications',
            'Collaborating with existing codebases, conducting code refactoring, and optimizing performance for enhanced efficiency',
            'SWR-PDM platform development, including the creation of modules that seamlessly link product structures with documentation',
            'Designing and implementing web services to facilitate data exchange and communication',
            'Front-end development expertise, encompassing JavaScript, TypeScript, and proficiency in frameworks like Angular and React, to create engaging and user-friendly interfaces',
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
