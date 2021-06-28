import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Header() {




    const [navOpen, setNavOpen] = useState(false)

    return (
        <div className="portfolio-header">
            <div className="wrapper">
                <div className="logo-section">
                    <h1>AZ.</h1>
                </div>
                <div className={navOpen ? "nav-section nav-bar-activate" : "nav-section"} id="navSection">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                My projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                Contact me
                            </Link>
                        </li>
                    </ul>

                    <button className="ham-menu-button" onClick={() => setNavOpen(!navOpen)}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
