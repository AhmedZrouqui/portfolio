import React from 'react'
import Hero from '../Hero'
import AboutMe from '../AboutMe'
import Services from '../Services'
import LatestWorks from '../LatestWorks'

function HomeComponent() {
    return (
        <div className="homeComponent">
            <Hero />
            <AboutMe />
            <Services />
            <LatestWorks />
        </div>
    )
}

export default HomeComponent
