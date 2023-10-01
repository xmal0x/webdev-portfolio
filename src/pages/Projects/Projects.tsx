import React, {ChangeEvent, useState} from "react"
import {HiOutlineAdjustmentsVertical, HiOutlineCheck} from 'react-icons/hi2'
import {ProjectCard, Sidebar} from "../../components"
import {withOpacityTransition, withPageStyles} from "../../hoc"

import {filters} from "../../constants"
import {projects} from "../../data"

const Projects = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])
    const [projectData, setProjectData] = useState(projects)

    const handleCheck = ({target}: ChangeEvent<HTMLInputElement>) => {
        const updated = target.checked
            ? [...selectedFilters, target.value]
            : selectedFilters.filter(tag => tag !== target.value)

        const filteredProjects = updated.length > 0
            ? projects.filter(project =>
                updated.every(tag => project.tags.includes(tag)))
            : projects

        setProjectData(filteredProjects)
        setSelectedFilters(updated)
    }


    return (
        <div className="flex text-white-text w-full mx-auto md:flex-row flex-col">
            <div className="md:flex hidden">
                <Sidebar>
                    <p className="text-white-text items-center mb-4 flex ">
                        <HiOutlineAdjustmentsVertical className="h-6 w-6 object-contain mr-2"/>projects</p>

                    <ul className="pl-8 mb-8">
                        {filters.map(filter => (
                            <div key={filter.id} className="flex items-center mb-2 group">
                                <input value={filter.value} type="checkbox" id={filter.value}
                                       className="group-hover:border-white relative cursor-pointer peer
                                       appearance-none mr-4 w-5 h-5 rounded border-2 border-gray-text
                                       bg-second-dark-bg checked:bg-blue-text checked:border-0"
                                       onChange={handleCheck}
                                />
                                {filter.icon}
                                <label htmlFor={filter.value}
                                       className={`cursor-pointer group-hover:text-white ${selectedFilters.includes(filter.value) ? 'text-white-text' : ''}`}>{filter.title}</label>
                                <HiOutlineCheck
                                    className="w-4 h-4 ml-0.5 absolute hidden peer-checked:block cursor-pointer pointer-events-none text-second-dark-bg"
                                    strokeWidth={4}/>
                            </div>
                        ))}
                    </ul>
                </Sidebar>
            </div>

            <div className="sm:p-8 p-4 overflow-auto m-auto">
                <div
                    className="md:grid flex-col lg:grid-cols-3 grid-cols-2 gap-8">
                    {projectData.map(project => (
                        <ProjectCard {...project} key={project.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withOpacityTransition(withPageStyles(Projects))
