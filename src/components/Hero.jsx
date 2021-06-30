import React from 'react';
import porfotlioImg from '../styles/img/portfolioImg.png';
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <div className="portfolio-hero">
            <div className="wrapper">
                <div className="hire-me-section">
                    <h1>
                        I'm Ahmed,
                    </h1>

                    <h3 className="presentation">
                        Based in Morocco, I'm a freelance web developer.
                    </h3>

                    <Link className="hire-me-button">
                        Hire Me
                    </Link>
                </div>

                <div className="img-section">
                    <img src={porfotlioImg} alt="my-img"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero
