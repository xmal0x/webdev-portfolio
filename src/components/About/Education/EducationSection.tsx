import {Textarea} from "../../index"

import {skills} from "../../../constants"
import {aboutEducation} from "../../../data"

const EducationSection = () => {
    return (
        <section className="flex w-full lg:flex-row flex-col gap-8">
            <div className="flex-1">
                <Textarea content={aboutEducation}/>
            </div>
            <div className="flex-center flex-[0.75]">
                <div className="flex gap-8 flex-wrap justify-center">
                    {skills.map(({title, icon}) => (
                        <span className="hover:text-white h-fit" title={title} key={title}>{icon}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EducationSection
