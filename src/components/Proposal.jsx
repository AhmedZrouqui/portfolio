import React from 'react'
import {Link} from 'react-scroll'

function Proposal() {
    return (
        <div className="portfolio-proposal">
            <div className="wrapper">
                <div className="title-section">
                    <h2 className="title">Have projects in mind ? Let's work together</h2>
                </div>
                <div className="hire-me">
                    <Link className="hire-me-button"
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}>
                        Hire me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Proposal
