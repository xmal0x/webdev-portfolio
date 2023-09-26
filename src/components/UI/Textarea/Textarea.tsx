import React from "react";
import {TextareaProps} from "../../../types";

const Textarea = ({content}: TextareaProps) => {
    const {title, paragraphs} = content

    return (
        <>
            {title.length > 0 && <h4 className="mb-4">{title}</h4>}
            {paragraphs.map(p => <p className="mb-2" key={p}>{p}</p>)}
        </>
    )
}

export default Textarea
