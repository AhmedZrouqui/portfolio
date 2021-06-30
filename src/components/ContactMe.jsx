import React from 'react'
import {Link} from 'react-router-dom'
import * as IoIcons from 'react-icons/io5'

function ContactMe() {
    return (
        <div className="portfolio-contactme">
            <div className="wrapper">
                <div className="title-section">
                    <h2 className="title">Contact Me</h2>
                </div>

                <div className="contact-me-section">
                    <div className="contact-info">
                        <h3 className="title">Contact Info</h3>
                        <div className="localization-info info">
                            <IoIcons.IoLocation className="icon location"/>
                            <span className="info-text">Mohammedia, Beni Yakhlef, Morocco</span>
                        </div>
                        <div className="email-info info">
                            <IoIcons.IoMail className="icon email" />
                            <span className="info-text">zrouqui.ahmed.az@gmail.com</span>
                        </div>
                        <div className="phone-info info">
                            <IoIcons.IoCall className="icon phone" />
                            <span className="info-text">+212 06 45 55 32 56</span>
                        </div>
                        <div className="website-info info">
                            <IoIcons.IoGlobeOutline className="icon globe" />
                            <span className="info-text">www.ahmed-zrouqui.com</span>
                        </div>

                        <div className="follow-me">
                            <h4 className="title">Follow Me</h4>
                            <ul className="follow-me-list">
                                <li className="follow-me-item">
                                    <Link to="https://web.facebook.com/ahm3dzrouqui/" className="follow-me-link"><IoIcons.IoLogoFacebook className="social-icon"/></Link>
                                </li>
                                <li className="follow-me-item">
                                    <Link to="https://www.linkedin.com/in/ahmed-zrouqui/" className="follow-me-link"><IoIcons.IoLogoLinkedin className="social-icon"/></Link>
                                </li>
                                <li className="follow-me-item">
                                    <Link to="https://www.instagram.com/_itsahm3d/" className="follow-me-link"><IoIcons.IoLogoInstagram className="social-icon"/></Link>
                                </li>
                                <li className="follow-me-item">
                                    <Link to="https://twitter.com/Ahmedzrouqui" className="follow-me-link"><IoIcons.IoLogoTwitter className="social-icon"/></Link>
                                </li>
                                <li className="follow-me-item">
                                    <Link to="https://www.pinterest.com/ahmedzrouqui/" className="follow-me-link"><IoIcons.IoLogoPinterest className="social-icon"/></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-me">
                        <form action="" className="contact-me-form">
                            <div className="form-div">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" name="fullname" id="full-name-text" placeholder="Type your name..." />
                            </div>
                            <div className="two-form-divs">
                                <div className="form-div">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input type="text" name="phonenumber" id="phone-number-text" placeholder="Type your phone number..." />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email-text" placeholder="Type your email address..." />
                                </div>
                            </div>
                            <div className="form-div">
                                <label htmlFor="your-message">Email</label>
                                <textarea name="your-message" id="your-message-text" placeholder="Type your message..." />
                            </div>
                            <div className="form-div">
                                <button className="send-message-button">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
