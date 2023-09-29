import React, {useState} from "react";
import {career} from "../../data";
import {infoSections} from "../../constants";
import {HiChevronDown, HiChevronRight, HiFolderOpen, HiUserCircle} from "react-icons/hi2"
import {Bio, Education, Sidebar, Stage, Timeline} from "../../components";
import {CareerStage} from "../../types";
import "yet-another-react-lightbox/styles.css";

enum contentType {
    about = 1,
    education = 2,
    experience = 3
}

const About = () => {
    const [selectedSectionId, setSelectedSectionId] = useState(1)
    const isSelected = (id: number) => selectedSectionId === id

    const [careerStage, setCareerStage] = useState<CareerStage | undefined>(undefined)

    const handleSelectContent = (id: number) => {
        setSelectedSectionId(id)
        setCareerStage(undefined)
    }

    const getContent = (id: number) => {
        switch (id) {
            case contentType.about:
                return <Bio/>
            case contentType.education:
                return <Education/>
            case contentType.experience:
                return (
                    <div className="md:flex-row flex-col">
                        <Timeline career={career} onSelect={setCareerStage}/>
                    </div>
                )
        }
    }

    return (
        <main className="my-14 flex w-full flex-1 relative bg-main-dark-bg">
            <div className="flex text-white-text w-full mx-auto md:flex-row flex-col">
                <Sidebar>
                    <p className="text-white-text items-center mb-4 md:flex hidden"><HiUserCircle
                        className="w-6 h-6 object-contain mr-2"/> personal_info</p>
                    <ul className="md:pl-7 md:mb-8">
                        {infoSections.map(({id, title}) => (
                            <li key={id}
                                onClick={() => handleSelectContent(id)}
                                className={`flex items-center hover:text-white cursor-pointer mb-2 ${isSelected(id) ? 'text-white-text' : ''}`}>
                                <span className="w-4 h-4 object-contain mr-2">
                                    {isSelected(id)
                                        ? <HiChevronDown/>
                                        : <HiChevronRight/>}
                                </span>
                                <span className="w-4 h-4 object-contain mr-2"><HiFolderOpen
                                    className={isSelected(id) ? 'text-blue-text' : ''}/></span>
                                {title}
                            </li>
                        ))}
                    </ul>
                </Sidebar>

                <div className="text-gray-text md:p-8 p-4 flex-1">
                    {getContent(selectedSectionId)}
                </div>

                {careerStage ?
                    <>
                        <div className="lg:hidden absolute bg-black opacity-70 inset-0"
                             onClick={() => setCareerStage(undefined)}>
                        </div>
                        <Stage stage={careerStage} key={careerStage.id} onClose={() => setCareerStage(undefined)}/>
                    </>
                    : <>{isSelected(contentType.experience) &&
                        <div className="md:flex hidden justify-center items-center flex-1">
                            <p>Select the stage you are interested in</p>
                        </div>}</>
                }
            </div>
        </main>
    );
};

export default About;
