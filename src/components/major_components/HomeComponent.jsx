import React from 'react'
import Hero from '../Hero'
import AboutMe from '../AboutMe'
import Services from '../Services'
import LatestWorks from '../LatestWorks'
import Experiences from '../Experiences'
import Proposal from '../Proposal'

function HomeComponent() {
    return (
        <div className="homeComponent">
            <Hero />
            <AboutMe />
            <Services />
            <LatestWorks />
            <Experiences />
            <Proposal />
        </div>
    )
}

export default HomeComponent
