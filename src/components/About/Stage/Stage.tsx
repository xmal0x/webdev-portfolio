import {months} from "../../../constants";
import {CareerStageProps} from "../../../types";

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

export const Stage = ({stage, onClose}: CareerStageProps) => {
    const {companyName, end, position, technology, tasks, start} = stage

    const datesData = geFormatDatesWithDiff(start, end)

    const handleClose = () => onClose()

    return (
        <div
            onClick={() => handleClose()}
            className="flex-1 lg:relative absolute inset-0 md:h-fit h-full md:m-4
            lg:bg-inherit bg-second-dark-bg overflow-auto
            lg:border-none border border-secondary-gray rounded-sm">
            <div className="flex-col md:p-8 p-4 flex overflow-auto">
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
