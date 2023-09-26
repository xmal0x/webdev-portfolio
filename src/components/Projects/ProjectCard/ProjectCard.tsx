import {ProjectCardProps} from "../../../types";
import React from "react";

export const ProjectCard = ({title, tags, image, description, links}: ProjectCardProps) => {

    return (
        <div>
            <div className="flex mb-4 flex-wrap">
                <h4 className="text-blue-text mr-2">Project:</h4>
                <p>{title}</p>
            </div>

            <div
                className="hover:border-blue-text relative transition duration-300 max-w-sm lg:h-80 h-fit flex justify-between flex-col rounded-sm overflow-hidden border border-secondary-gray">
                <div>
                    <img className="w-full md:h-36 object-cover object-left-top" src={image} alt={title}/>
                    {links.map(link => (
                        <div className="absolute top-2 right-2 p-0.5 rounded-full bg-white bg-opacity-90"
                             key={link.url}>
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
