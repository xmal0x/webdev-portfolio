import React, {useState} from "react";
import {career} from "../data";
import {infoSections, months} from "../constants";
import {HiChevronDown, HiChevronRight, HiFolderOpen, HiUserCircle} from "react-icons/hi2"
import {Sidebar, Timeline} from "../components";
import {CareerStage} from "../types";
import "yet-another-react-lightbox/styles.css";
import Bio from "../components/AboutMe/Bio/Bio";
import Education from "../components/AboutMe/Education/Education";

interface CareerStageProps {
    stage: CareerStage
    onClose: () => void
}

enum contentType {
    about = 1,
    education = 2,
    experience = 3
}

const geFormatDatesWithDiff = (start: Date, end: Date) => {
    const startYear = start.getFullYear()
    const startMonth = start.getMonth()
    const endYear = end.getFullYear()
    const endMonth = end.getMonth()

    let yearDiff = endYear - startYear
    let monthDiff = endMonth - startMonth

    if (monthDiff < 0) {
        monthDiff += 12
        yearDiff--
    }
    return [`${months[startMonth]} ${startYear} - ${months[endMonth]} ${endYear}`, `${yearDiff} yr ${monthDiff + 1} mos`]
}

const Stage = ({stage, onClose}: CareerStageProps) => {
    const {companyName, end, position, technology, tasks, start} = stage

    const datesData = geFormatDatesWithDiff(start, end)

    const handleClose = () => onClose()

    return (
        <div
            onClick={() => handleClose()}
            className="flex-1 lg:relative absolute inset-0 h-fit lg:m-0 m-4
            lg:bg-inherit bg-second-dark-bg overflow-auto
            lg:border-none border border-secondary-gray rounded-sm">
            <div className="flex-col md:p-8 p-4  flex overflow-auto">
                <h4 className="sm:text-2xl text-xl text-white mb-2">{companyName}</h4>
                <p className="sm:text-base text-sm">{datesData[0]}</p>
                <p className="sm:text-sm text-xs mb-4">{datesData[1]}</p>
                <p className="sm:text-xl text-base text-white mb-4">{position}</p>
                <div className="mb-4 flex flex-wrap sm:text-base text-sm">
                    {tasks.map(t => (
                        <p key={t} className="mb-2">- {t}</p>
                    ))}
                </div>
                <div className="flex flex-wrap">
                    {technology.map(t => (
                        <span key={t}
                              className="mr-2 px-2 text-sm mb-2 bg-blue-text rounded text-second-dark-bg">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    )
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
        <main className="mt-14 flex w-full flex-1 relative bg-main-dark-bg">
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

                    {/*<p className="text-white-text items-center mb-4 md:flex hidden"><HiGlobeAlt*/}
                    {/*    className="w-6 h-6 object-contain mr-2"/> contacts</p>*/}
                </Sidebar>

                <div className="text-gray-text md:p-8 p-4 flex-1">
                    {getContent(selectedSectionId)}
                </div>

                {careerStage &&
                    <>
                        <div className="lg:hidden absolute bg-black opacity-70 inset-0"
                             onClick={() => setCareerStage(undefined)}>
                        </div>
                        <Stage stage={careerStage} key={careerStage.id} onClose={() => setCareerStage(undefined)}/>
                    </>
                }
            </div>
        </main>
    );
};

export default About;
