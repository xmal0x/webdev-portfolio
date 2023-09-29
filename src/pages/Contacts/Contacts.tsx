import React, {useState} from "react"
import {CodeForm, ContactForm, Sidebar} from "../../components"
import {HiGlobeAlt} from "react-icons/hi2"
import {contacts} from "../../constants"
import {FormData} from '../../types'
import emailjs from 'emailjs-com'

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        date: '',
        email: ''
    })

    const handleSubmit = () => {
        if (!process.env.REACT_APP_SERVICE_ID
            || !process.env.REACT_APP_TEMPLATE_ID
            || !process.env.REACT_APP_PUBLIC_KEY) {
            throw new Error('Env vars is undefined')
        }

        return emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_PUBLIC_KEY
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
        <main className="my-14 flex w-full flex-1 relative bg-main-dark-bg">
            <div className="flex text-gray-text w-full mx-auto md:flex-row flex-col">
                <Sidebar>
                    <p className="text-white-text items-center mb-4 md:flex hidden"><HiGlobeAlt
                        className="w-6 h-6 object-contain mr-2"/>Contacts</p>
                    <ul className="md:pl-7 ">
                        {contacts.map(({id, text, icon, link}) => (
                            <li key={id}>
                                <a href={link} target="_blank" rel="noreferrer"
                                   className='flex items-center hover:text-white cursor-pointer mb-2 gap-2'>
                                    {icon} {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Sidebar>
                <div className="flex-1 flex items-center justify-center p-4">
                    <ContactForm onSubmit={handleSubmit} onChange={handleFormDataChange}/>
                </div>

                <div className="bg-second-dark-bg flex-1 lg:flex hidden items-center justify-center p-4">
                    <CodeForm data={formData}/>
                </div>
            </div>

        </main>
    )
}

export default Contacts
