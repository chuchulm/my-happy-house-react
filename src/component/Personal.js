import React from 'react'
import '../styles/personal.css'
import happy3 from '../img/happy-3.jpeg';
import admin from '../img/admin.jpeg';
import Logo from '../img/logo-happy-house-vector.png'

export const Personal = () => {
    return (
        <div className="testimony">
            <div className="container">
                <h2 className="subtitle">Capital humano</h2>
            

                <div className="testimony-container">
                    <div className="testimony__card">
                        <img src={happy3} className="testimony__img" alt="myhappyhousechile"/>
                        <div className="testimony__copy">
                            <i className='bx bxl-google testimony__logo'></i>
                            <div className="testimony__info">
                               <h3 className="testimony__name">Mariela Morales</h3>
                                <p className="testimony__position">Directora</p>       
                            </div>
                            <img src={Logo} alt='myhappyhousechile' className='logo--picture ' />
                        </div>
                    </div>

                    <div className="testimony__card">
                        <img src={admin} className="testimony__img" alt="myhappyhousechile"/>
                        <div className="testimony__copy">
                            <i className='bx bxl-apple testimony__logo'></i>
                            <div className="testimony__info">
                                <h3 className="testimony__name">Mariela Riveron</h3>
                                <p className="testimony__position">Administradora</p>
                            </div>
                            <img src={Logo} alt='myhappyhousechile' className='logo--picture ' />
                        </div>
                    </div>

                   
                    
                </div>
            </div>
        </div>
    )
}
