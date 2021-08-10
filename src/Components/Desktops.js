import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import '../Assets/CSS/Desktops.css'
import { Container } from '@material-ui/core'

import Avatar from '../Assets/Img/HappyBunchAvatar.svg'

import { formatCardNumber, cardValidate, formatExpiryDate } from './Validations'
function Desktops() {

    // Create State variables for input Div focus attribute
    const [nameActive, setNameActive] = useState(false)
    const [cardNumberActive, setcardNumberActive] = useState(false)
    const [expiryDateActive, setExpiryDateActive] = useState(false)
    const [cvvActive, setcvvActive] = useState(false)
    const [zipActive, setzipActive] = useState(false)

    // Create state variables for form Data
    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [zipCode, setZipCode] = useState('')

    //Set errors for Form inputs
    const [nameError, setNameError] = useState(false)
    const [cardError, setCardError] = useState(false)
    const [expiryDateError, setExpiryDateError] = useState(false)
    const [cvvError, setCvvError] = useState(false)
    const [zipError, setZipError] = useState(false)

    // show Error Dialog if error exists on form submit
    const [errorState, setErrorState] = useState(false)

    // Create Ref for Form
    const formRef = useRef()
    
    useEffect(() => {
        setCardNumber(formatCardNumber(cardNumber))
    }, [cardNumber])

    useEffect(() => {
        setExpiryDate(formatExpiryDate(expiryDate))
    }, [expiryDate])
    function submitForm(e){
        e.preventDefault()
        cardValidate(name, cardNumber, expiryDate, cvv, zipCode)
            .then(res => {
                if(res[1] > 0){
                    setErrorState(true)
                    setTimeout(() => {
                        setErrorState(false)
                    }, 6000)
                }
                console.log(res)
                setNameError(res[0].name)
                setCardError(res[0].cardNumber)
                setExpiryDateError(res[0].expiryDate)
                setCvvError(res[0].cvv)
                setZipError(res[0].zip)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <Container maxWidth="lg">
                <center>
                    <Navbar active="desktops" />
                    <div className="desktop-bg">
                        <div className="desktop-container">
                            <img src={Avatar} alt="" className="avatar" />
                            <span className="payment-info">
                                Payment info
                            </span>
                            <form action="#"
                                autoComplete="off"
                                ref={formRef}
                                onSubmit={(e) => submitForm(e)}
                            >
                                <label htmlFor="cardholder-name">Full Name</label>
                                <div 
                                    className={`input-container input-active-${nameActive} input-error-${nameError}`}
                                >
                                    <input type="text"
                                        spellCheck="false"
                                        autoComplete="off"
                                        className={`input`}
                                        id="cardholder-name"
                                        onFocus={() => setNameActive(true)}
                                        onBlur={() => setNameActive(false)}
                                        onChange={e => setName(e.target.value)}
                                        
                                    />
                                    <span className="input-icon" >
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                                <br />

                                
                                <label htmlFor="card">Credit Card Number</label>
                                <div 
                                    className={`input-container input-active-${cardNumberActive} input-error-${cardError}`}
                                >
                                    <input type="text"
                                        spellCheck="false"
                                        id="card"
                                        value={cardNumber}
                                        className={`input input-active${cardNumberActive}`}
                                        onFocus={() => setcardNumberActive(true)}
                                        onBlur={() => setcardNumberActive(false)}
                                        onChange={e => setCardNumber(e.target.value)}
                                    />
                                    <span className="input-icon" >
                                        <i className="fas fa-credit-card-front"></i>
                                    </span>
                                </div>
                                <br />

                                <div className="form-row">
                                    <div style={{'textAlign': 'left', 'width':"100%"}}>
                                        <label htmlFor="expiry">Exp Date</label>
                                        <div className={`input-container half-input-container input-active-${expiryDateActive} input-error-${expiryDateError}`}>
                                            <input type="text"
                                                maxLength={5}
                                                value={expiryDate}
                                                spellCheck="false"
                                                id="expiry"
                                                className={`input input-active${expiryDateActive}`}
                                                onFocus={() => setExpiryDateActive(true)}
                                                onBlur={() => setExpiryDateActive(false)}
                                                onChange={e => setExpiryDate(e.target.value)}
                                            />
                                            <span className="input-icon" >
                                                <i className="fas fa-calendar-day"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div style={{'textAlign': 'left', 'width':"100%"}}>
                                        <label htmlFor="cvv">CVV</label>
                                        <div className={`input-container half-input-container input-active-${cvvActive} input-error-${cvvError}`}
                                            style={{'width': '100%'}}
                                        >
                                            <input type="text"
                                                maxLength="3"
                                                spellCheck="false"
                                                id="cvv"
                                                value={cvv}
                                                className={`input input-active${cvvActive}`}
                                                onFocus={() => setcvvActive(true)}
                                                onBlur={() => setcvvActive(false)}
                                                onChange={e => setCvv(e.target.value)}
                                            />
                                            <span className="input-icon" >
                                                <i className="fas fa-key"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <label htmlFor="card-zip-codex">Zip Code</label>
                                <div className={`input-container input-active-${zipActive} input-error-${zipError}`}>
                                    <input type="text"
                                        id="card-zip-codex"
                                        className={`input input-active${zipActive}`}
                                        onFocus={() => setzipActive(true)}
                                        onBlur={() => setzipActive(false)}
                                        onChange={e => setZipCode(e.target.value)}
                                    />
                                    <span className="input-icon" >
                                        <i className="fas fa-credit-card-front"></i>
                                    </span>
                                </div>
                                <br />
                                <button type="submit" className="confirm-payment">
                                    Confirm Payment
                                </button>
                                <p className={`error-div error-show-${errorState}`}>
                                    <span className="error-icon">
                                    <i className="far fa-lightbulb-exclamation"></i>
                                    </span>
                                    <span className="error-message">
                                        Please check payment details!
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </center>
            </Container>
        </>
    )
}

export default Desktops
