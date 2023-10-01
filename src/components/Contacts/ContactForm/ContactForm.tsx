import React, {ChangeEvent, FormEvent, useEffect, useState} from "react"
import {Button} from "../../index"

import './styles.css'

import {ContactFormProps, FormData, FormProps, SuccessMessageProps} from "../../../types"

const SuccessMessage = ({text, onSendNewMessage}: SuccessMessageProps) => {
    return (
        <div className="flex flex-col w-full gap-4 items-center">
            <h4 className="text-2xl text-white">Thank you!</h4>
            <p className="max-w-sm text-center mb-6">{text}</p>
            <button className="button" onClick={onSendNewMessage}>send_new_message</button>
        </div>
    )
}


const Form = ({onSubmit, onChange, message, email, loading, name, error}: FormProps) => {

    const isDataValid = () => {
        return message.length > 0 && email.length > 3 && name.length > 0
    }

    return (
        <div className="flex-center flex-col w-full">
            <form onSubmit={onSubmit} className="form">
                <label className="label">
                    name:
                    <input
                        name="name"
                        type="text"
                        className="input"
                        value={name}
                        onChange={onChange}
                        placeholder="Your name..."
                    />
                </label>
                <label className="label">
                    email:
                    <input
                        name="email"
                        type="email"
                        className="input"
                        value={email}
                        onChange={onChange}
                        placeholder="Your email..."
                    />
                </label>
                <label className="label">
                    message:
                    <textarea
                        name="message"
                        className="input resize-none"
                        rows={8}
                        value={message}
                        onChange={onChange}
                        placeholder="Your message..."
                    />
                </label>

                <Button
                    type="submit" disabled={!isDataValid()}
                    text={!loading ? 'send_message' : 'sending...'}
                    className={`self-end ${!isDataValid() || loading ? 'disabled' : ''}`}
                />
            </form>

            {error.length > 0 &&
                <div className="text-center mt-6 text-red-400">
                    {error}
                </div>
            }
        </div>
    )
}

const ContactForm = ({onSubmit, onChange}: ContactFormProps) => {
    const [sent, setSent] = useState(false)
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

        const currentDate = new Date().toLocaleDateString("en-EN")
        setFormData(prevState => ({...prevState, date: currentDate}))

        const isSuccess = await onSubmit()

        setLoading(false)

        if (isSuccess) {
            setSent(true)
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
        setSent(false)
    }

    return (
        <>
            {
                sent
                    ?
                    <SuccessMessage text="Your message has been sent. I will respond to you
                                 shortly." onSendNewMessage={handleSendNewMessage}/>

                    :
                    <Form
                        onSubmit={handleSubmit}
                        name={formData.name}
                        email={formData.email}
                        message={formData.message}
                        onChange={handleChange}
                        loading={loading}
                        error={error}/>

            }
        </>
    )
}

export default ContactForm
