import React, {FormEvent, useState} from "react";
import {CodeForm, ContactForm, Sidebar} from "../components";
import {HiGlobeAlt} from "react-icons/hi2";
import {contacts} from "../constants";
import {FormData} from '../types'


const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        date: '',
        email: ''
    })

    const handleSubmit = (e: FormEvent) => {

    }

    const handleFormDataChange = (data: FormData) => {
        console.log(data)
        setFormData(data)
    }

    return (
        <main className="mt-14 flex w-full flex-1 relative bg-main-dark-bg">
            <div className="flex text-gray-text w-full mx-auto md:flex-row flex-col">
                <Sidebar>
                    <p className="text-white-text items-center mb-4 md:flex hidden"><HiGlobeAlt
                        className="w-6 h-6 object-contain mr-2"/>Contacts</p>
                    <ul className="pl-7 md:block hidden">
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

                <div className="bg-second-dark-bg flex-1 flex items-center justify-center p-4">
                    <CodeForm data={formData}/>
                </div>
            </div>

        </main>
    )
}

export default Contacts
