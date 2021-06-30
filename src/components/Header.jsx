import React, { useState } from 'react'
import { Link } from "react-scroll";

function Header() {




    const [navOpen, setNavOpen] = useState(false)
    const [boxShadow, setBoxShadow] = useState(false)

    const addNavShadow = () => {

        if(window.scrollY >= 150){
            setBoxShadow(true)
        } else {
            setBoxShadow(false)
        }
    }

    window.addEventListener('scroll', addNavShadow)

    return (
        <div className={boxShadow ? "portfolio-header on-scroll-shadow" : "portfolio-header"}>
            <div className="wrapper">
                <div className="logo-section">
                    <h1>AZ.</h1>
                </div>
                <div className={navOpen ? "nav-section nav-bar-activate" : "nav-section"} id="navSection">
                    <ul className="nav-list">
                    <Link className="nav-link"
                        to="home"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>
                                Home
                        </Link>
                        <Link className="nav-link"
                        to="about-me"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>
                                About me
                        </Link>
                        <Link className="nav-link"
                        to="services"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>
                                Services
                        </Link>
                        <Link className="nav-link"
                        to="projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>
                                Projects
                        </Link>
                        <Link className="nav-link"
                        to="contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>
                                Contact me
                        </Link>
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
