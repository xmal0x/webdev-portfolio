import {CgClose} from "react-icons/cg"

import {CareerStageProps} from "@types"

import {months} from "@constants"

const getFormattedDatesWithDiff = (start: Date, end?: Date) => {
    const startYear = start.getFullYear()
    const startMonth = start.getMonth()
    const endYear = end ? end.getFullYear() : new Date().getFullYear()
    const endMonth = end ? end.getMonth() : new Date().getMonth()

    let yearDiff = endYear - startYear
    let monthDiff = endMonth - startMonth

    if (monthDiff < 0) {
        monthDiff += 12
        yearDiff--
    }
    const formatedEnd = end ? `${months[endMonth]} ${endYear}` : 'Present'

    const dateRange = `${months[startMonth]} ${startYear} - ${formatedEnd}`
    const duration = yearDiff > 0 ? `${yearDiff} yr ${monthDiff + 1} mos` : `${monthDiff + 1} mos`
    return [dateRange, duration]
}

const Stage = ({stage, onClose}: CareerStageProps) => {
    const {companyName, end, position, technology, tasks, start} = stage

    const [dateRange, duration] = getFormattedDatesWithDiff(start, end)

    return (
        <section
            className="flex-1 lg:relative absolute inset-0 md:h-fit h-full
            lg:bg-inherit bg-second-dark-bg overflow-auto text-gray-text
            lg:border-none border border-secondary-gray rounded-sm">
            <div className="flex-col md:p-0 p-4 flex overflow-auto">
                <div className="flex flex-row">
                    <div>
                        <h4 className="sm:text-2xl text-xl text-white mb-2">{companyName}</h4>
                        <p className="sm:text-base text-sm">{dateRange}</p>
                        <p className="sm:text-sm text-xs mb-4">{duration}</p>
                    </div>
                </div>
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
            <button
                className="md:hidden text-second-dark-bg block p-2 opacity-70 rounded-full bg-white border-2 border-white fixed bottom-20 right-6 z-50"
                type="button"
                onClick={onClose}
            >
                <CgClose className=" w-8 h-8 object-contain "/>
            </button>
        </section>
    )
}

export default Stage
