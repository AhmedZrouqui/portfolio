import React from 'react'
import {Link} from 'react-scroll';
import { customize } from '../customize/customize';

function AboutMe() {
    return (
        <div className="portfolio-aboutme" id="about-me">
            <div className="wrapper">
                <div className="title-section">
                    <h2>About Me</h2>
                </div>

                <div className="information-section">
                    <p>{customize.about_me.first}</p>
                    <p>{customize.about_me.second}</p>

                    <div className="information-links">
                        <Link className="view-works link"
                        to="projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>View works</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
