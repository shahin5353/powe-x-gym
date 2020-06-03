import React, { useState, useEffect } from 'react';
import './Price.scss';
import Spinner from '../../images/Logo-Preloaders.gif'
import { Link } from 'react-router-dom';


const Price = () => {
    const [pricing, setPricing] = useState(null);
    useEffect(() => {
        fetch('https://power-x-gym.herokuapp.com/pricing-plans')
            .then(res => res.json())
            .then(data => {
                setPricing(data);
                document.getElementById('spinner').style.display = 'none';
                console.log(pricing);

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="text-center display-3 font-weight-bold text-uppercase">Pricing Plans</h1>
            </div>

            <section>
                <div className="container">
                    <h1 className="text-center text-uppercase my-5 px-5"><span className="text-warning">Choose your offer</span> that suits you</h1>
                    <div className="d-flex justify-content-center">
                        <img id="spinner" src={Spinner} alt="spinner" />
                    </div>
                    <div className="row">
                        {
                            pricing &&
                            pricing.map((pricing_plan => {
                                return (
                                    <div className="col-md-4" >
                                    <div className="card pricing" style={{ backgroundImage : `linear-gradient(to bottom, rgba(0,0,0,0.70), rgba(0,0,0,0.70)),url(${pricing_plan.img})` }}>
                                <h6 className="text-uppercase text-center mb-0 mt-4">billed {pricing_plan.duration}</h6>
                                    <h2 className="text-uppercase text-center ">{pricing_plan.title}</h2>
                                    <h1 className="text-warning text-center  display-4 font-weight-bold">${pricing_plan.price}</h1>
                                    <ul className="list-unstyled mt-3 align-self-center">
                                    {
                                        pricing_plan.facilities.map((facility) =>{
                                            return (
                                                <li className="pb-3 font-weight-bold text-capitalize"><span className="text-light mr-4">&#10004;</span> { facility } </li>
                                            )
                                        })
                                    }
                                </ul>
                                <Link className="text-center" to={`/membership/${pricing_plan.title}`}>
                                <button className="bg-warning text-dark font-weight-bold border-0 px-5 py-2 text-uppercase mb-5">purchase</button>
                                </Link>
                                 
                                    </div>
                                </div>
                                )
                            }))
                           
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Price;