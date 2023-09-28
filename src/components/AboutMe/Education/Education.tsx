import {Textarea} from "../../index";
import {aboutEducation} from "../../../data";
import {skills} from "../../../constants";

const Education = () => {
    return (
        <div className="flex w-full lg:flex-row flex-col gap-8">
            <div className="flex-1">
                <Textarea content={aboutEducation}/>
            </div>
            <div className="flex flex-[0.75] items-center justify-center ">
                <div className="flex gap-8 flex-wrap justify-center">
                    {skills.map(({title, icon}) => (
                        <span className="hover:text-white h-fit" title={title}>{icon}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
