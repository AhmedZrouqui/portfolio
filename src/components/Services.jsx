import React from 'react'
import backend from '../styles/img/back-end.jpg'
import frontend from '../styles/img/front-end.jpg'
import webdev from '../styles/img/web-dev.jpg'
import setshop from '../styles/img/set-shop.jpg'

import * as AiIcons from 'react-icons/ai'

import { customize } from '../customize/customize'

function Services() {
    return (
        <div className="portfolio-services" id="services">
            <div className="wrapper">
                <div className="title-section">
                    <h2 className="title">
                        Services
                    </h2>

                    <p className="title-information">{customize.services.services_description}</p>
                </div>


                <div className="services-section">
                    <div className="web-dev service" style={{backgroundImage: `url(${webdev})` }}>
                        <div className="overlay">
                        <div className="content">
                            <AiIcons.AiOutlineCodepen className="icon" />
                            <h2 className="title">{customize.services.first_service.title}</h2>
                            <p>{customize.services.first_service.information}</p>
                        </div>
                        </div>

                        
                    </div>
                    <div className="set-shop service " style={{backgroundImage: `url(${setshop})` }}>
                        <div className="overlay">
                        <div className="content">
                            <AiIcons.AiOutlineLineChart className="icon" />
                            <h2 className="title">{customize.services.second_service.title}</h2>
                            <p>{customize.services.second_service.information}</p>
                        </div>
                        </div>
                    </div>
                    <div className="front-end service" style={{backgroundImage: `url(${frontend})` }}>
                        <div className="overlay">
                        <div className="content">
                            <AiIcons.AiOutlineLayout className="icon" />
                            <h2 className="title">{customize.services.third_service.title}</h2>
                            <p>{customize.services.third_service.information}</p>
                        </div>
                        </div>

                    </div>
                    <div className="back-end service" style={{backgroundImage: `url(${backend})` }}>
                        <div className="overlay">
                            <div className="content">
                                <AiIcons.AiOutlineConsoleSql className="icon" />
                                <h2 className="title">{customize.services.fourth_service.title}</h2>
                                <p>{customize.services.fourth_service.information}</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Services
