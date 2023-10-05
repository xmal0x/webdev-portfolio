import {LinksSectionProps} from "@constants";

const LinksSection = ({title, links, icon, containerClasses = ''}: LinksSectionProps) => {
    return (
        <div className={`md:mb-8 mb-2 ${containerClasses}`}>
            <p className="text-white-text items-center mb-4 md:flex hidden">{icon}{title}</p>
            <ul className="md:pl-8 ">
                {links.map(({id, text, icon, link}) => (
                    <li key={id}>
                        <a href={link} target="_blank" rel="noreferrer"
                           className='flex items-center hover:text-white cursor-pointer mb-2 gap-2'>
                            {icon} {text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksSection
