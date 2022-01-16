import React from 'react'
import Button from './Button'
import './Section.css'

export default function Section({title, description, buttonText}) {
    return (
        <div className="column">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <Button text={buttonText} />
        </div>
    )
}
