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
                    <p>Ahmed Zrouqui, i'm a web developer(Front and Back-end) based in Morocco.</p>
                    <p>I'm best known for my passion towards writing raw code, wether on front-end(HTML, CSS) or on back-end(i have no choice tho). What makes me a perfectionist web developer... tho i rarely use plugins or pre-made libraries (except for the big well known ones). </p>

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
