import React from 'react'
import { customize } from '../customize/customize'

function Footer() {
    return (
        <div className="portfolio-footer">
            <div className="wrapper">
                <div className="big-logo-footer">
                    <h1 className="logo">{customize.footer_information.name_logo}</h1>
                    <p>{customize.footer_information.add_on}</p>
                </div>

                <div className="last-footer">
                    <span>Copyright &#169; 2021  <span>ZROUQUI Ahmed</span></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
