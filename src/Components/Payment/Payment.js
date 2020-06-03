import React, { useState } from 'react';
import './Payment.scss';

import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const [perror, setPerror]= useState(null)
    const [payment, setPayment]= useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        });
        if(error){
            setPayment(null);
            setPerror(error)
            console.log(error)
        }

        else{
            setPerror(null)
            setPayment(paymentMethod)
            const paymentFinished= {id: paymentMethod.id, last4: paymentMethod.card.last4}
            props.handlePlaceOrder(paymentFinished)
            console.log(paymentMethod)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
            Pay
        </button>

        {
            perror && <p style={{color: "red"}}>Payment Failed</p>
        }

        {
            payment && <p style={{color: "green"}}>Payment Successful: your payment- {payment.id}</p>
        }
        </form>
    );
};

export default CheckoutForm;