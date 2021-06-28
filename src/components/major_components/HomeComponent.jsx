import React from 'react'
import Hero from '../Hero'
import AboutMe from '../AboutMe'
import Services from '../Services'

function HomeComponent() {
    return (
        <div className="homeComponent">
            <Hero />
            <AboutMe />
            <Services />
        </div>
    )
}

export default HomeComponent
