import {Stage, Timeline} from "../../../components";
import React, {useState} from "react";
import {CareerStage} from "../../../types";
import {career} from "../../../data";
import {withOpacityTransition} from "../../../hoc";

const Experience = () => {
    const [careerStage, setCareerStage] = useState<CareerStage | undefined>(undefined)

    return (
        <div className="flex w-full">
            <div>
                <Timeline career={career} onSelect={setCareerStage}/>
            </div>

            {careerStage ?
                <>
                    <div className="lg:hidden absolute bg-black opacity-70 inset-0"
                         onClick={() => setCareerStage(undefined)}>
                    </div>
                    <Stage stage={careerStage} key={careerStage.id} onClose={() => setCareerStage(undefined)}/>
                </>
                :
                <div className="md:flex hidden justify-center items-center flex-1">
                    <p>Select the stage you are interested in</p>
                </div>
            }
        </div>
    )
}

export default withOpacityTransition(Experience)
