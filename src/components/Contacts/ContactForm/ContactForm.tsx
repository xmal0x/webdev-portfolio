import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import './styles.css'
import {ContactFormProps, FormData} from "../../../types";

const ContactForm = ({onSubmit, onChange}: ContactFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        date: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target

        setFormData(prevState => ({...prevState, [name]: value}))
    }

    useEffect(() => onChange(formData), [formData, onChange])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(e)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                name:
                <input
                    name="name"
                    type="text"
                    className="input"
                    value={formData.name}
                    onChange={handleChange}/>
            </label>
            <label className="label">
                email:
                <input name="email" type="email" className="input" value={formData.email} onChange={handleChange}/>
            </label>
            <label className="label">
                message:
                <textarea name="message" className="input resize-none" rows={8} value={formData.message}
                          onChange={handleChange}/>
            </label>

            <button type="submit" className="submit">submit_message</button>
        </form>
    )
}

export default ContactForm
