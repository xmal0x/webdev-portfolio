import React from "react"
import {TimelineItem} from "@components"

import {TimeLineProps} from "@types"

const Timeline = ({career, onSelect}: TimeLineProps) => {
    return (
        <ul className="border-l-2 border-white relative list-none max-w-fit">
            {career.map(stage => (
                <TimelineItem careerStage={stage} key={stage.id} onSelect={() => onSelect(stage)}/>
            ))}
        </ul>
    )
}

export default Timeline
