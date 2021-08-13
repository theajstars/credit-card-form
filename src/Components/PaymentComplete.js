import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../Assets/CSS/PaymentComplete.css'
import PaymentGif from '../Assets/Img/gif.gif'

export default function PaymentComplete(props) {
    const [displayModal, setDisplayModal] = useState(false)
    useEffect(() => {
        var payed = props.payed
        payed === true ? setDisplayModal(true) : setDisplayModal(false)
    }, [props.payed])
    return (
        <div className={`payment-complete payment-animation-${displayModal}`}>
            <Container maxWidth="xl">
                <div className="payment-content">
                    <img src={PaymentGif} alt="" className="pay-gif" />
                    <div className="payment-details">
                        <span className="pay-head">Payment Completed</span>
                        <span className="cardholder">
                            Oluwaferanmi Ajiboye
                        </span>
                        <div className="card-details">
                            <span className="card-detail-card-icon">
                                <i className="far fa-credit-card-front"></i>
                            </span>
                            <span className="credit-card-text">
                                Card ending in <i> <i className="fas fa-ellipsis-h"></i>2021</i>
                            </span>
                        </div>
                            <button className="another-payment" onClick={() => window.location.reload()}>
                                    Make another payment
                            </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
