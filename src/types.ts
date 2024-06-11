import React, {ChangeEvent, FormEvent} from "react"
import {Image} from "react-grid-gallery"

export interface NavButtonProps {
    link: string
    title: string
    showRightBorder?: boolean
}

export interface ProjectCardProps {
    title: string
    description: string
    image: string
    tags: string[]
    links: { icon: React.ReactNode, title: string, url: string }[]
}

export interface CareerStage {
    id: number
    companyName: string
    start: Date
    end?: Date
    position: string
    technology: string[]
    tasks: string[]
}

export interface TimeLineProps {
    career: CareerStage[]
    onSelect: (stage: CareerStage) => void
}

export interface TimeLineItemProps {
    careerStage: CareerStage
    onSelect: () => void
}

export interface CustomImage extends Image {
    original: string;
}

export interface TextContent {
    title: string
    paragraphs: string[]
}

export interface TextareaProps {
    content: TextContent
}

export interface Link {
    id: number
    text: string
    link: string
    icon?: React.ReactNode
}

export interface ContactFormProps {
    onSubmit: () => Promise<boolean>
    onChange: (data: FormData) => void
}

export interface FormData {
    name: string
    email: string
    message: string
    date: string
}

export interface ButtonProps {
    type: 'button' | 'submit'
    disabled: boolean
    text: string
    className?: string
    children?: React.ReactNode
}

export interface CareerStageProps {
    stage: CareerStage
    onClose: () => void
}

export interface CodeFormProps {
    data: FormData
}

export interface FormProps {
    onSubmit: (e: FormEvent) => Promise<void>
    name: string
    email: string
    message: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    loading: boolean
    error: string
}

export interface SuccessMessageProps {
    text: string
    onSendNewMessage: () => void
}

export interface FooterLinkProps {
    link: string
    icon: React.ReactNode
    isLast: boolean
}

export interface DropdownMenuProps {
    isVisible: boolean
    onClose: () => void
}

export interface SideBarProps {
    children: React.ReactNode
}

export interface DropdownLinkProps {
    onClose: () => void
    link: string
    title: string
}
