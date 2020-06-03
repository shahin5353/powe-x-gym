import React from 'react';
import about_img from "../../power-x-gym/Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg";
import abs from '../../power-x-gym/Image & Icon/Group 87.png'
import cycle from '../../power-x-gym/Image & Icon/Group 88.png'
import gift from '../../power-x-gym/Image & Icon/gift-2.png';
import player from '../../images/unnamed.gif'
import './Home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* hero */}
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                 <div className="row">
                 <div className="col-md-6">
                   <h1 className="display-4 banner-heading">THE BEST FITNESS STUDIO IN TOWN</h1>
                    <p className="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
                    <Link className="btn btn-warning py-2 px-5 text-uppercase border-0 mt-4 font-weight-bold" to="/class">
                        join us
                    </Link>
                   </div>
                   <div className="col-md-5 text-right mt-5 pt-5">
                        <Link className="text-decoration-none">
                        <img className="w-25" src={player} alt="images"/>
                        </Link>
                   </div>
                 </div>
                </div>
                
            </div>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 progression">
                            <h2>Progression</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-md-3 workout">
                            <h2>Workout</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-md-3 nutrition">
                            <h2>Nutrition</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* about */}
            <div class="container about">
                <div class="row">
                    <div class="col-md-6">
                        <img src={about_img} class="rounded float-left" alt="..."/>
                    </div>
                    <div class="col-md-6">
                        <h1>About Us</h1>
                        <h2>We are here to dream</h2>
                        <h4>Our team is here to serve you</h4>
                    </div>
                </div>
            </div>

            {/* why choose us */}
            <div className='container why_us'>
                <h1 className='text-center'>Why Choose Us</h1>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={abs} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>Free Fitness Training</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={cycle} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>Tons of Cardio and Strength</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={gift} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>No Commitment Memberships</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;