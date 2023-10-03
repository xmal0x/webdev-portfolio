import {ProjectCardProps} from "../../../types"

const ProjectCard = ({title, tags, image, description, links}: ProjectCardProps) => {

    return (
        <div className="relative mb-8">

            <div className="flex mb-4 flex-wrap">
                <h4 className="text-blue-text mr-2">Project:</h4>
                <p>{title}</p>
            </div>

            <div
                className="hover:border-blue-text group relative transition duration-200 max-w-sm
                h-fit min-h-[24rem] flex justify-between flex-col rounded-sm overflow-hidden border
                border-secondary-gray">
                <div
                    className="transition duration-200 absolute inset-0 flex-center flex-col
                    group-hover:opacity-100 opacity-0">
                    <div className="w-full opacity-80 bg-second-dark-bg h-full absolute">
                    </div>
                    {links.map(({icon, title, url}) => (
                        <a
                            key={url}
                            href={url}
                            rel="noreferrer"
                            target="_blank"
                            title={title}
                            className="z-50 flex-center py-2 px-6 border
                            border-secondary-gray rounded bg-main-dark-bg
                            hover:text-white hover:bg-second-dark-bg hover:shadow
                            transition-colors duration-200 mb-2"
                        >
                            {icon} {title}
                        </a>
                    ))}
                </div>

                <div>
                    <img className="w-full md:h-36 object-cover object-left-top" src={image} alt={title}/>
                    <div className="px-6 py-4 text-gray-text">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap">
                    {tags.map(tag => (
                        <span key={tag}
                              className="flex w-fit text-blue-text rounded-sm text-xs mr-2 mb-2">{`#${tag}`}</span>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
