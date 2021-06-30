import React from 'react'
import * as IoIcons from 'react-icons/io5'
import { customize } from '../customize/customize'
import emailjs from 'emailjs-com'



function ContactMe() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_n57kqyn', 'template_2eyu558', e.target, 'user_h2OXj1nKntiTbZv5FrhsB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }

    return (
        <div className="portfolio-contactme" id="contact">
            <div className="wrapper">
                <div className="title-section">
                    <h2 className="title">Contact Me</h2>
                </div>

                <div className="contact-me-section">
                    <div className="contact-info">
                        <h3 className="title">Contact Info</h3>
                        <div className="localization-info info">
                            <IoIcons.IoLocation className="icon location"/>
                            <span className="info-text">{customize.conact_info.location}</span>
                        </div>
                        <div className="email-info info">
                            <IoIcons.IoMail className="icon email" />
                            <span className="info-text">{customize.conact_info.email}</span>
                        </div>
                        <div className="phone-info info">
                            <IoIcons.IoCall className="icon phone" />
                            <span className="info-text">{customize.conact_info.phone_number}</span>
                        </div>
                        <div className="website-info info">
                            <IoIcons.IoGlobeOutline className="icon globe" />
                            <span className="info-text">{customize.conact_info.website}</span>
                        </div>

                        <div className="follow-me">
                            <h4 className="title">Follow Me</h4>
                            <ul className="follow-me-list">
                                <li className="follow-me-item">

                                    <a href={customize.social_media.facebook} 
                                    className="follow-me-link"
                                    target="_blank"
                                    id="facebook">
                                        <IoIcons.IoLogoFacebook className="social-icon"/>
                                    </a>

                                </li>
                                <li className="follow-me-item">

                                    <a href={customize.social_media.linkedin} 
                                    className="follow-me-link"
                                    target="_blank"
                                    id="linkedin">
                                        <IoIcons.IoLogoLinkedin className="social-icon"/>
                                    </a>

                                </li>
                                <li className="follow-me-item">

                                    <a href={customize.social_media.instagram} 
                                    className="follow-me-link"
                                    target="_blank"
                                    id="instagram">
                                        <IoIcons.IoLogoInstagram className="social-icon"/>
                                    </a>

                                </li>
                                <li className="follow-me-item">

                                    <a href={customize.social_media.twitter} 
                                    className="follow-me-link"
                                    target="_blank"
                                    id="twitter">
                                        <IoIcons.IoLogoTwitter className="social-icon"/>
                                    </a>

                                </li>
                                <li className="follow-me-item">
                                    <a href={customize.social_media.pinterest} 
                                    className="follow-me-link"
                                    target="_blank"
                                    id="pinterest">
                                        <IoIcons.IoLogoPinterest className="social-icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-me">
                        <form onSubmit={sendEmail} className="contact-me-form">
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
                                <label htmlFor="message">Email</label>
                                <textarea name="message" id="your-message-text" placeholder="Type your message..." />
                            </div>
                            <div className="form-div">
                                <input type="submit" name="submit-button" className="send-message-button" value="Send Message"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
