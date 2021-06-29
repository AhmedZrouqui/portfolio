import React from 'react'
import {Link} from 'react-router-dom'

function Proposal() {
    return (
        <div className="portfolio-proposal">
            <div className="wrapper">
                <div className="title-section">
                    <h2 className="title">Have projects in mind ? Let's work together</h2>
                </div>
                <div className="hire-me">
                    <Link className="hire-me-button">
                        Hire me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Proposal
