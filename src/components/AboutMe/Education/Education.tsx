import {Textarea} from "../../index";
import {aboutEducation} from "../../../data";

const Education = () => {
    return (
        <div className="flex-1">
            <Textarea content={aboutEducation}/>
        </div>
    );
};

export default Education;
