import React from 'react'
import Hero from '../Hero'
import AboutMe from '../AboutMe'
import Services from '../Services'
import LatestWorks from '../LatestWorks'
import Experiences from '../Experiences'
import Proposal from '../Proposal'
import ContactMe from '../ContactMe'
import Footer from '../Footer'

function HomeComponent() {
    return (
        <div className="homeComponent">
            <Hero />
            <AboutMe />
            <Services />
            <LatestWorks />
            <Experiences />
            <Proposal />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default HomeComponent
