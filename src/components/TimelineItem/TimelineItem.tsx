import {TimeLineItemProps} from "../../types";
import React from "react";

const TimelineItem = ({careerStage, onSelect}: TimeLineItemProps) => {
    const {companyName, start, end, position, technology} = careerStage
    return (
        <li className="relative group" onClick={onSelect}>
            <span className="absolute -left-[7px] bg-white rounded-full h-3 w-3 group-hover:bg-blue-text"></span>
            <div
                className="p-8 pt-2 duration-200 transition group-hover:bg-white-text group-hover:bg-opacity-5 cursor-pointer">
                <h5 className="text-xl text-white-text">{companyName}</h5>
                <p className="text-sm">{`${start.getFullYear()} - ${end.getFullYear()}`} </p>
                <p className="">{position}</p>
                <div className="flex flex-wrap">
                    {technology.map(tech => (
                        <span className="mr-2 text-sm text-blue-text" key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default TimelineItem
