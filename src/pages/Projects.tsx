import {Sidebar} from "../components";
import {AdjustmentsVerticalIcon, CheckIcon} from "@heroicons/react/24/outline";
import {ChangeEvent, useState} from "react";
import {car_catalog, dashboard, earth_landing} from "../assets";

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
        tags: ['tailwind', 'nextjs', 'react', 'typescript', 'nextauth', 'mongodb']
    },
    {
        id: 2,
        title: 'earth_life_landing',
        description: 'Save Our Earth Landing Page',
        image: earth_landing,
        tags: ['tailwind', 'react', 'typescript']
    },
    {
        id: 3,
        title: 'dashboard_interface',
        description: 'Web interface with dashboard and chat',
        image: dashboard,
        tags: ['tailwind', 'react', 'typescript', 'apexcharts',]
    }
]

export interface ProjectCardProps {
    title: string
    description: string
    image: string
    tags: string[]
}

const ProjectCard = ({title, tags, image, description}: ProjectCardProps) => {
    return (
        <div className="">
            <div className="flex mb-4">
                <h4 className="text-blue-text mr-2">Project:</h4>
                <p>{title}</p>
            </div>

            <div
                className="hover:scale-105 transition duration-300 max-w-sm h-80 rounded-sm overflow-hidden border border-secondary-gray">
                <img className="w-full h-48 object-cover object-left-top" src={image} alt={title}/>
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

    const handleCheck = ({target}: ChangeEvent<HTMLInputElement>) => {
        let updated = [...checked]

        if (target.checked) {
            updated.push(target.value)
        } else {
            updated.splice(checked.indexOf(target.value), 1)
        }

        setChecked(updated)

        console.log(checked)
    }

    return (
        <main className="flex w-full flex-1 relative bg-main-dark-bg">
            <div className="flex text-white-text w-full mx-auto">
                <Sidebar>
                    <p className="text-white-text flex items-center mb-4">
                        <AdjustmentsVerticalIcon className="h-6 w-6 object-contain mr-2"/>projects</p>

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
                                <CheckIcon
                                    className="w-4 h-4 ml-0.5 absolute hidden peer-checked:block cursor-pointer pointer-events-none text-second-dark-bg"
                                    strokeWidth={4}/>
                            </div>
                        ))}
                    </ul>
                </Sidebar>

                <div className="p-8">
                    <div className="md:grid flex flex-col lg:grid-cols-3 grid-cols-2 gap-8">
                        {projects.map(project => (
                            <ProjectCard {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;
