import React from 'react'
import { customize } from '../customize/customize'

function Experiences() {

    const displayExperiences = () => {
        return customize.experiences.map((experience,index) => {
            return (
                <div className="experience" key={index}>
                    <div className="content">
                        <span className="time">{experience.time}</span>
                        <h2 className="title">{experience.occupied_position}</h2>
                        <span className="inc">{experience.company}</span>
                        <p>{experience.information}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="portfolio-experiences">
            <div className="wrapper">
                <div className="title-section">

                    <h2 className="title">
                        My Experiences
                    </h2>

                    <p className="title-information">{customize.experiences_description}</p>

                </div>

                <div className="experiences-section">
                    {
                        displayExperiences()
                    }
                </div>
            </div>
        </div>
    )
}

export default Experiences
