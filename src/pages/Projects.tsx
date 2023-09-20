import {Sidebar} from "../components";
import {HiOutlineAdjustmentsVertical, HiOutlineCheck} from 'react-icons/hi2'
import React, {ChangeEvent, useState} from "react";
import {car_catalog, dashboard, earth_landing} from "../assets";
import {AiOutlineGithub} from "react-icons/ai";

const filters = [
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

const projects = [
    {
        id: 1,
        title: 'car_catalog',
        description: 'Search cars using filters',
        image: car_catalog,
        tags: ['tailwind', 'nextjs', 'react', 'typescript', 'nextauth', 'mongodb'],
        links: [
            {
                icon: <AiOutlineGithub className="w-8 h-8 object-contain text-second-dark-bg"/>,
                title: 'github',
                url: 'https://github.com/xmal0x/carCat'
            },
        ]
    },
    {
        id: 2,
        title: 'earth_life_landing',
        description: 'Save Our Earth Landing Page',
        image: earth_landing,
        tags: ['tailwind', 'react', 'typescript'],
        links: [
            {
                icon: <AiOutlineGithub className="w-8 h-8 object-contain text-second-dark-bg"/>,
                title: 'github',
                url: 'https://github.com/xmal0x/earth-life-landing'
            },
        ]
    },
    {
        id: 3,
        title: 'dashboard_interface',
        description: 'Web interface with dashboard and chat',
        image: dashboard,
        tags: ['tailwind', 'react', 'typescript', 'apexcharts'],
        links: [
            {
                icon: <AiOutlineGithub className="w-8 h-8 object-contain text-second-dark-bg"/>,
                title: 'github',
                url: 'https://github.com/xmal0x/Dashboard'
            },
        ]
    },
    {
        id: 4,
        title: 'earth_life_landing',
        description: 'Save Our Earth Landing Page',
        image: earth_landing,
        tags: ['tailwind', 'react', 'typescript'],
        links: [
            {
                icon: <AiOutlineGithub className="w-8 h-8 object-contain text-second-dark-bg"/>,
                title: 'github',
                url: 'https://github.com/xmal0x/earth-life-landing'
            },
        ]
    },
    {
        id: 4,
        title: 'earth_life_landing',
        description: 'Save Our Earth Landing Page',
        image: earth_landing,
        tags: ['tailwind', 'react', 'typescript'],
        links: [
            {
                icon: <AiOutlineGithub className="w-8 h-8 object-contain text-second-dark-bg"/>,
                title: 'github',
                url: 'https://github.com/xmal0x/earth-life-landing'
            },
        ]
    },
    {
        id: 6,
        title: 'earth_life_landing',
        description: 'Save Our Earth Landing Page',
        image: earth_landing,
        tags: ['tailwind', 'react', 'typescript'],
        links: [
            {
                icon: <AiOutlineGithub className="w-8 h-8 object-contain text-second-dark-bg"/>,
                title: 'github',
                url: 'https://github.com/xmal0x/earth-life-landing'
            },
        ]
    },
]

export interface ProjectCardProps {
    title: string
    description: string
    image: string
    tags: string[]
    links: { icon: React.ReactNode, title: string, url: string }[]
}

const ProjectCard = ({title, tags, image, description, links}: ProjectCardProps) => {
    return (
        <div className="">
            <div className="flex mb-4">
                <h4 className="text-blue-text mr-2">Project:</h4>
                <p>{title}</p>
            </div>

            <div
                className="hover:scale-105 relative transition duration-300 max-w-sm lg:h-80 h-96 flex justify-between flex-col rounded-sm overflow-hidden border border-secondary-gray">
                <img className="w-full h-48 object-cover object-left-top" src={image} alt={title}/>
                {links.map(link => (
                    <div className="absolute top-2 right-2 p-0.5 rounded-full bg-white bg-opacity-90" key={link.url}>
                        <a
                            href={link.url}
                            rel="noreferrer"
                            target="_blank"
                            title={link.title}>{link.icon}</a>
                    </div>
                ))}
                <div className="px-6 py-4">
                    <p>{description}</p>
                </div>

                <div className="px-6 pt-4 pb-2 flex flex-wrap">
                    {tags.map(tag => (
                        <span
                            className="flex w-fit text-blue-text rounded-sm text-xs mr-2 mb-2">{`#${tag}`}</span>
                    ))}

                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [checked, setChecked] = useState<string[]>([])
    const [projectData, setProjectData] = useState(projects)

    const handleCheck = ({target}: ChangeEvent<HTMLInputElement>) => {
        let updated = [...checked]

        if (target.checked) {
            updated.push(target.value)
        } else {
            updated.splice(checked.indexOf(target.value), 1)
        }

        const filteredProjects = updated.length > 0
            ? projects.filter(project =>
                updated.every(tag => project.tags.includes(tag)))
            : projects

        setProjectData(filteredProjects)
        setChecked(updated)
    }


    return (
        <main className="mt-14 flex w-full flex-1 relative bg-main-dark-bg overflow-auto">
            <div className="flex text-white-text w-full mx-auto">
                <Sidebar>
                    <p className="text-white-text flex items-center mb-4">
                        <HiOutlineAdjustmentsVertical className="h-6 w-6 object-contain mr-2"/>projects</p>

                    <ul className="pl-7 mb-8">
                        {filters.map(filter => (
                            <div key={filter.id} className="flex items-center mb-2 group">
                                <input value={filter.value} type="checkbox" id={filter.value}
                                       className="group-hover:border-white relative cursor-pointer peer
                                       appearance-none mr-2 w-5 h-5 rounded border-2 border-gray-text
                                       bg-second-dark-bg checked:bg-blue-text checked:border-0"
                                       onChange={handleCheck}
                                />
                                <div>{filter.image}</div>
                                <label htmlFor={filter.value}
                                       className={`cursor-pointer group-hover:text-white ${checked.includes(filter.value) ? 'text-white-text' : ''}`}>{filter.title}</label>
                                <HiOutlineCheck
                                    className="w-4 h-4 ml-0.5 absolute hidden peer-checked:block cursor-pointer pointer-events-none text-second-dark-bg"
                                    strokeWidth={4}/>
                            </div>
                        ))}
                    </ul>
                </Sidebar>

                <div className="p-8 overflow-auto">
                    <div className="md:grid flex flex-col lg:grid-cols-3 grid-cols-2 gap-8">
                        {projectData.map(project => (
                            <ProjectCard {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;
