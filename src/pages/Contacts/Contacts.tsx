import React, {useEffect, useState} from "react"
import emailjs from 'emailjs-com'
import {HiDocumentText, HiGlobeAlt} from "react-icons/hi2"
import {HiDocumentDownload} from "react-icons/hi";
import {RiDownloadCloudFill} from "react-icons/ri";

import {CodeForm, ContactForm, Sidebar} from "@components"
import {withOpacityTransition, withPageStyles} from "@hoc"

import {FormData} from '@types'
import {contacts} from "@constants"
import {Link} from "react-router-dom";


const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        date: '',
        email: ''
    })

    useEffect(() => {
        if (!process.env.REACT_APP_SERVICE_ID
            || !process.env.REACT_APP_TEMPLATE_ID
            || !process.env.REACT_APP_PUBLIC_KEY) {
            throw new Error('Env vars is undefined')
        }
    }, []);

    const handleSubmit = () => {
        return emailjs.send(
            process.env.REACT_APP_SERVICE_ID!,
            process.env.REACT_APP_TEMPLATE_ID!,
            formData,
            process.env.REACT_APP_PUBLIC_KEY!
        ).then(
            (result) => true,
            error => {
                console.error('error', error)
                return false
            }
        )
    }

    const handleFormDataChange = (data: FormData) => {
        setFormData(data)
    }

    return (
        <div className="flex text-gray-text w-full mx-auto md:flex-row flex-col">
            <Sidebar>
                <div>
                    <p className="text-white-text items-center mb-4 md:flex hidden"><HiGlobeAlt
                        className="w-6 h-6 object-contain mr-2"/>Contacts</p>
                    <ul className="md:pl-8 ">
                        {contacts.map(({id, text, icon, link}) => (
                            <li key={id}>
                                <a href={link} target="_blank" rel="noreferrer"
                                   className='flex items-center hover:text-white cursor-pointer mb-2 gap-2'>
                                    {icon} {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:block hidden mt-6">
                    <p className="text-white-text items-center mb-4 md:flex hidden"><HiDocumentText
                        className="w-6 h-6 object-contain mr-2"/>CV</p>
                    <ul className="md:pl-8 ">
                        <li className="mb-2 hover:text-white">
                            <Link to="/kgalkin_en_cv.pdf" target="_blank"
                                  className="flex items-center gap-2"><HiDocumentDownload
                                className="w-5 h-5 object-contain"/>English</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to="/kgalkin_ru_cv.pdf" target="_blank"
                                  className="flex items-center gap-2"><HiDocumentDownload
                                className="w-5 h-5 object-contain"/>Russian</Link>

                        </li>
                    </ul>
                </div>
                <div className="md:hidden flex mt-2 border-t border-secondary-gray">
                    <p className="flex items-center gap-2 mt-2"><RiDownloadCloudFill
                        className="w-4 h-4 object-contain"/>Download my CV
                        <Link to="/kgalkin_en_cv.pdf" target="_blank" className="home-link mx-2">en</Link>or
                        <Link to="/kgalkin_ru_cv.pdf" target="_blank" className="home-link mx-2">ru</Link>
                    </p>
                </div>
            </Sidebar>
            <div className="flex-1 flex-center p-4">
                <ContactForm onSubmit={handleSubmit} onChange={handleFormDataChange}/>
            </div>

            <div className="bg-second-dark-bg flex-1 lg:flex hidden items-center justify-center p-4">
                <CodeForm data={formData}/>
            </div>
        </div>
    )
}

export default withOpacityTransition(withPageStyles(Contacts))
