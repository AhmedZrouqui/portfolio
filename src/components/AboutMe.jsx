import React from 'react'
import {Link} from 'react-router-dom';

function AboutMe() {
    return (
        <div className="portfolio-aboutme">
            <div className="wrapper">
                <div className="title-section">
                    <h2>About Me</h2>
                </div>

                <div className="information-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.</p>

                    <div className="information-links">
                        <Link className="view-works link">View works</Link>
                        <Link className="download-cv link">Download CV</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
