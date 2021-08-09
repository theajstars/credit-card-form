import { Container } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import '../Assets/CSS/Mobile.css'
import Navbar from './Navbar'

import Avatar from '../Assets/Img/HappyBunchAvatar.svg'

const Mobile = () => {
    // const nameInput = useRef()
    // nameInput.current.addEventListener('click', () => {
    //     nameInput.current.parentElement.remove()
    // })
    // const 
    const [nameActive, setNameActive] = useState(false)
    const [cardNumberActive, setcardNumberActive] = useState(false)
    const [expiryDateActive, setExpiryDateActive] = useState(false)
    const [cvvActive, setcvvActive] = useState(false)
    const [zipActive, setzipActive] = useState(false)
    return (
        <Container maxWidth="md">
            <Navbar active="mobile" />
            <center>
                <div className="mobile-container">
                    <img src={Avatar} alt="" className="avatar" />
                    <span className="payment-info">
                        Payment info
                    </span>
                    <form action="#">
                        <label htmlFor="name">Full Name</label>
                        <div className={`input-container input-active-${nameActive}`}>
                            <input type="text" className="input" id="name" onFocus={() => setNameActive(true)} onBlur={() => setNameActive(false)} />
                            <span className="input-icon" >
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                        <br />

                        
                        <label htmlFor="card">Credit Card Number</label>
                        <div className={`input-container input-active-${cardNumberActive}`}>
                            <input type="text"
                                id="card"
                                className={`input input-active${cardNumberActive}`}
                                onFocus={() => setcardNumberActive(true)}
                                onBlur={() => setcardNumberActive(false)} />
                            <span className="input-icon" >
                                <i className="fas fa-credit-card-front"></i>
                            </span>
                        </div>
                        <br />

                        <div className="form-row">
                            <div style={{'textAlign': 'left'}}>
                                <label htmlFor="expiry">Exp Date</label>
                                <div className={`input-container half-input-container input-active-${expiryDateActive}`}>
                                    <input type="text"
                                        id="expiry"
                                        className={`input input-active${expiryDateActive}`}
                                        onFocus={() => setExpiryDateActive(true)}
                                        onBlur={() => setExpiryDateActive(false)} />
                                    <span className="input-icon" >
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </div>
                            </div>

                            <div style={{'textAlign': 'left'}}>
                                <label htmlFor="cvv">CVV</label>
                                <div className={`input-container half-input-container input-active-${cvvActive}`}>
                                    <input type="text"
                                        id="cvv"
                                        className={`input input-active${cvvActive}`}
                                        onFocus={() => setcvvActive(true)}
                                        onBlur={() => setcvvActive(false)} />
                                    <span className="input-icon" >
                                        <i className="fas fa-key"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="zip">Zip Code</label>
                        <div className={`input-container input-active-${zipActive}`}>
                            <input type="text"
                                id="zip"
                                className={`input input-active${zipActive}`}
                                onFocus={() => setzipActive(true)}
                                onBlur={() => setzipActive(false)} />
                            <span className="input-icon" >
                                <i className="fas fa-credit-card-front"></i>
                            </span>
                        </div>
                        <br />
                    </form>
                </div>
            </center>
        </Container>
    )
}

export default Mobile