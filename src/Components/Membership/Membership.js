import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Membership.scss' 
import "react-datepicker/dist/react-datepicker.css";


import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

import { useForm } from 'react-hook-form'
import CheckoutForm from '../Payment/Payment';

const Membership = () => {
    const {plan}= useParams()

    const { register, handleSubmit, watch, errors } = useForm()

    const [info, setInfo]= useState(null)
    const [orderId, setOrderId]= useState(null)

    const handlePlaceOrder=(payment)=>{
        const orderDetails={
            info: info,
            payment: payment
        }
        fetch('https://power-x-gym.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
          })
        .then(res => res.json())
        .then(data => {
            setOrderId(data._id)

        })
        

    }

    const stripePromise = loadStripe('pk_test_9LdgoCBp8Incv69ExYHe6Z7700x0gmpujW');

    const onSubmit = data => {
        setInfo(data)
        // console.log(data) 
    }
    
    return (
        <div>
            <section>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <h1 className="text-center display-3 font-weight-bold text-uppercase">{plan}</h1>
                    </div>
                </div>
            </section>

            <div  className='container '>
            <ul className="progressbar">
                <li className="active">Mobile Details</li>
                <li className={info && "active"}>Upload</li>
                <li className={orderId && "active"}>Payment</li>
            </ul>
                <form style={{display: info && 'none'}} className="form mt-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                        <div className="col-md-6 form-group mt-5">
                            <label htmlFor="">First Name </label> <br/>
                            <input type="text" className="form-control" name="First_Name" ref={register({ required: true })} />
                            {errors.First_Name && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-6 form-group mt-5">
                            <label htmlFor="">Last Name </label> <br/>
                            <input type="text" className="form-control" name="Last_Name" ref={register({ required: true })} />
                            {errors.Last_Name && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="">Email </label> <br/>
                            <input type="email" className="form-control" name="Email" ref={register({ required: true })} />
                            {errors.Email && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-6 form-group">
                            <label htmlFor="">Mobile Number </label> <br/>
                            <input type="tel" className="form-control" name="Mobile_Number" ref={register({ required: true })} />
                            {errors.Mobile_Number && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 form-group">
                        <label htmlFor="">Gender </label> <br/>
                        <select className="form-control" name="gender" ref={register({ required: true })}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-6 form-group">
                            <label htmlFor="">Date Of Birth </label> <br/>
                            <input type="date" className="form-control" name="Birth" ref={register({ required: true })}/>
                            {errors.Birth && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="">Address </label> <br/>
                            <input className="form-control" name="Address" ref={register({ required: true })}/>
                            {errors.Address && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-6 form-group">
                            <label htmlFor="">City </label> <br/>
                            <input className="form-control" name="City" ref={register({ required: true })}/>
                            {errors.City && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="">Postcode </label> <br/>
                            <input className="form-control" name="Post" ref={register({ required: true })}/>
                            {errors.Post && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-6 form-group">
                            <label htmlFor="">Package </label> <br/>
                            <input className="form-control text-capitalize" name="Package" readonly="readonly" defaultValue={plan} ref={register({ required: true })}/>
                            {errors.Package && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    
                   <div className="form-group d-flex justify-content-center justify-content-md-end">
                   <button className="bg-warning px-5 py-1 border-0 font-weight-bold" type="submit">Next</button>
                   </div>
                </form>
            </div>


            <section style={{marginTop: '200px' , display: info ? (!orderId ? 'block' : 'none') : 'none' }} className='container' >
                <h1 style={{marginBottom: '20px'}}>Pay here via your credit card</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                    
                </Elements>
            </section>
            <section style={{marginTop: '200px' , display: (info && orderId) ? 'block' : 'none' }} className='container text-center' >
                <h1 style={{marginBottom: '20px'}}>Payment Successful</h1>
               <Link to="/" className="text-decoration-none">
                    <button className="btn btn-success">Go to Home</button>
               </Link>
               
            </section>
        </div>
    );
};

export default Membership;