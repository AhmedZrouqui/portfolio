import React from 'react'
import petcare from '../styles/img/petcare-work.jpg'

function LatestWorks() {
    return (
        <div className="portfolio-latestworks">
            <div className="wrapper">
                <div className="title-section">
                    <h2 className="title">
                        Latest Projects
                    </h2>

                    <p className="title-information">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur</p>
                </div>
                <div className="catalog-section">
                    <div className="petcare work" style={{backgroundImage: `url(${petcare})`}}>
                        <div className="content">
                        </div>

                        <div className="hover-content">
                            <h2 className="hover-title">PetCare Inc</h2>
                            <p className="description">PetCare is an Online shop made with Prestashop, Html And Css.</p>

                            <p className="click-me">
                                Click to visite website.
                            </p>
                        </div>
                    </div>

                    <div className="work2 work">
                        <div className="content">
                            <h2>Incoming Project</h2>
                        </div>


                        <div className="hover-content">
                            <h2 className="hover-title">Incoming Project</h2>
                            <p className="description">Project coming soon.</p>
                        </div>
                    </div>
                    <div className="work3 work">
                        <div className="content">
                            <h2>Incoming Project</h2>
                        </div>

                        <div className="hover-content">
                            <h2 className="hover-title">Incoming Project</h2>
                            <p className="description">Project coming soon.</p>
                        </div>
                    </div>
                    <div className="work4 work">
                        <div className="content">
                            <h2>Incoming Project</h2>
                        </div>

                        
                        <div className="hover-content">
                            <h2 className="hover-title">Incoming Project</h2>
                            <p className="description">Project coming soon.</p>
                        </div>
                    </div>
                    <div className="work5 work">
                        <div className="content">
                            <h2>Incoming Project</h2>
                        </div>

                        <div className="hover-content">
                            <h2 className="hover-title">Incoming Project</h2>
                            <p className="description">Project coming soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        

        </div>
    )
}

export default LatestWorks
