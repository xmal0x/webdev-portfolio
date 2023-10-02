import {TextareaProps} from "../../../types"

const Textarea = ({content}: TextareaProps) => {
    const {title, paragraphs} = content

    return (
        <>
            {title.length > 0 && <h4 className="mb-6 text-xl">{title}</h4>}
            {paragraphs.map(p =>
                <p className="mb-6" key={p}>
                    {p}
                </p>
            )}
        </>
    )
}

export default Textarea
