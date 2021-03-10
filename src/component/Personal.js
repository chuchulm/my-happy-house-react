import React from 'react'
import '../styles/personal.css'
import happy3 from '../img/happy-3.jpeg';

export const Personal = () => {
    return (
        <div className="testimony">
            <div className="container">
                <h2 className="subtitle">Directoras<span className="point">.</span></h2>
                {/* <p className="copy__div">directores </p> */}

                <div className="testimony-container">
                    <div className="testimony__card">
                        <img src={happy3} className="testimony__img"/>
                        <div className="testimony__copy">
                            <i className='bx bxl-google testimony__logo'></i>
                            <div className="testimony__info">
                                <h3 className="testimony__name">Mariela Riveron</h3>
                                <p className="testimony__position">Directora My happy house</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimony__card">
                        <img src={happy3} className="testimony__img"/>
                        <div className="testimony__copy">
                            <i className='bx bxl-apple testimony__logo'></i>
                            <div className="testimony__info">
                                <h3 className="testimony__name">Mariela Riveron</h3>
                                <p className="testimony__position">Directora My happy house</p>
                            </div>
                        </div>
                    </div>

                   
                    
                </div>
            </div>
        </div>
    )
}
