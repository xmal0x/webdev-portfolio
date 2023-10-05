import React, {useEffect, useState} from "react"
import emailjs from 'emailjs-com'
import {HiDocumentText, HiGlobeAlt} from "react-icons/hi2"
import {HiDotsCircleHorizontal} from "react-icons/hi";
import {RiDownloadCloudFill} from "react-icons/ri";

import {CodeForm, ContactForm, LinksSection, Sidebar} from "@components"
import {withOpacityTransition, withPageStyles} from "@hoc"

import {FormData} from '@types'
import {contacts, cvLinks, otherLinks} from "@constants"
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

                <LinksSection
                    title="Contacts"
                    icon={<HiGlobeAlt className="w-6 h-6 object-contain mr-2"/>}
                    links={contacts}/>


                <LinksSection
                    title="CV"
                    icon={<HiDocumentText className="w-6 h-6 object-contain mr-2"/>}
                    links={cvLinks} containerClasses="md:block hidden"/>


                <div className="md:hidden flex my-2 border-t border-secondary-gray"></div>
                <LinksSection
                    title="More"
                    icon={<HiDotsCircleHorizontal className="w-6 h-6 object-contain mr-2"/>}
                    links={otherLinks}/>

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
