import React from 'react'
import backend from '../styles/img/back-end.jpg'
import frontend from '../styles/img/front-end.jpg'
import webdev from '../styles/img/web-dev.jpg'
import setshop from '../styles/img/set-shop.jpg'

import * as AiIcons from 'react-icons/ai'

function Services() {
    return (
        <div className="portfolio-services">
            <div className="wrapper">
                <div className="title-section">
                    <h2 className="title">
                        Services
                    </h2>

                    <p className="title-information">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur</p>
                </div>


                <div className="services-section">
                    <div className="web-dev service" style={{backgroundImage: `url(${webdev})` }}>
                        <div className="overlay">
                        <div className="content">
                            <AiIcons.AiOutlineCodepen className="icon" />
                            <h2 className="title">Web Dev.</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                        </div>
                        </div>

                        
                    </div>
                    <div className="set-shop service " style={{backgroundImage: `url(${setshop})` }}>
                        <div className="overlay">
                        <div className="content">
                            <AiIcons.AiOutlineLineChart className="icon" />
                            <h2 className="title">Shop Dev.</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                        </div>
                        </div>
                    </div>
                    <div className="front-end service" style={{backgroundImage: `url(${frontend})` }}>
                        <div className="overlay">
                        <div className="content">
                            <AiIcons.AiOutlineLayout className="icon" />
                            <h2 className="title">Front-end Dev.</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                        </div>
                        </div>

                    </div>
                    <div className="back-end service" style={{backgroundImage: `url(${backend})` }}>
                        <div className="overlay">
                            <div className="content">
                                <AiIcons.AiOutlineConsoleSql className="icon" />
                                <h2 className="title">Back-end Dev.</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Services
