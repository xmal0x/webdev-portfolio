import React from "react";

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
