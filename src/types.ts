import React from "react";
import {Image} from "react-grid-gallery";

export interface NavButtonProps {
    link: string,
    title: string,
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
    end: Date
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
