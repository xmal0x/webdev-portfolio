import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import './styles.css'
import {ContactFormProps, FormData} from "../../../types";

const ContactForm = ({onSubmit, onChange}: ContactFormProps) => {
    const [sended, setSended] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setFormData(prevState => ({...prevState, date: new Date().toLocaleDateString("en-EN")}))

        const isSuccess = await onSubmit()

        setLoading(false)

        if (isSuccess) {
            setSended(true)
            setFormData({
                name: '',
                email: '',
                message: '',
                date: ''
            })
        } else {
            setError('Something went wrong. Please try alternative means of contact or retry your attempt later.')
        }

    }

    const handleSendNewMessage = () => {
        setSended(false)
    }

    const isDataValid = () => {
        return formData.message.length > 0 && formData.email.length > 3 && formData.name.length > 0
    }

    return (
        <>
            {
                sended
                    ? (
                        <div className="flex flex-col w-full gap-4 items-center">
                            <h4 className="text-2xl text-white">Thank you!</h4>
                            <p className="max-w-sm text-center mb-6">Your message has been sent. I will respond to you
                                shortly.</p>
                            <button className="button" onClick={handleSendNewMessage}>send_new_message</button>
                        </div>
                    )
                    : (
                        <div className="flex flex-col w-full justify-center items-center">
                            <form onSubmit={handleSubmit} className="form">
                                <label className="label">
                                    name:
                                    <input
                                        name="name"
                                        type="text"
                                        className="input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name..."
                                    />
                                </label>
                                <label className="label">
                                    email:
                                    <input
                                        name="email"
                                        type="email"
                                        className="input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email..."
                                    />
                                </label>
                                <label className="label">
                                    message:
                                    <textarea
                                        name="message"
                                        className="input resize-none"
                                        rows={8}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message..."
                                    />
                                </label>

                                <button type="submit"
                                        className={`button self-end ${!isDataValid() || loading ? 'disabled' : ''}`}
                                        disabled={!isDataValid()}>{!loading ? 'send_message' : 'sending...'}
                                </button>
                            </form>

                            {error.length > 0 &&
                                <div className="text-center mt-6 text-red-400">
                                    {error}
                                </div>
                            }
                        </div>
                    )
            }
        </>


    )
}

export default ContactForm
