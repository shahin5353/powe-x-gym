import React, { useEffect, useState } from 'react';
import Spinner from '../../images/Logo-Preloaders.gif'
import { useParams, Link } from 'react-router-dom';
import './SingleClass.scss';

const SingleClass = () => {
    const { id } = useParams()
    const [singleClass, setSingleClass] = useState(null);

    useEffect(() => {
        fetch(`https://power-x-gym.herokuapp.com/classes/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleClass(data);
                document.getElementById('spinner').style.display='none';
            })
            .catch(err => console.log(err))
    }, [id])
    return (
        <div>
                    <div class="jumbotron jumbotron-fluid">
                        <h1 class="text-center display-3 text-uppercase" style={{ fontWeight: 700 }}>{singleClass ? singleClass.title : "Our Classes"}</h1>
                    </div>
                    <div className="container schedule">
                    <div className="d-flex justify-content-center">
                    <img  id="spinner" src={Spinner} alt="spinner"/>
                    </div>
                    { 
                    singleClass &&
                    <>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={singleClass.img} className="class_image" alt="" />
                                <p className="lead my-2 text-justify">{singleClass.desc}</p>
                                <ul className="list-unstyled mt-3">
                                    {
                                        singleClass.facilities.map((facility) =>{
                                            return (
                                                <li className="pb-3 font-weight-bold text-capitalize"><span className="text-light bg-warning rounded px-1 mr-4">&#10004;</span> { facility } </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h1 className='text-uppercase mb-5 mt-sm-3'><span className="text-warning">Class</span> Schedule</h1>
                                <div className='row'>
                                    {
                                        (singleClass.schedule).map((sc) => {
                                            return (
                                                <div className='col-md-6'>
                                                    <div className="card border-0 shadow mb-4">
                                                        <div className="card-body">
                                                            <p className="text-capitalize">{sc.day}</p>
                                                            <p className="text-warning">8.00 AM to 9.00 AM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                               

                            </div>



                        </div>
                        <div className="row">
                            <div className="col-12">
                            <div className="d-flex justify-content-center justify-content-md-end">
                                <Link className="text-decoration-none" to={`/pricing`}>
                                    <button id="join-btn" className="btn btn-warning px-4 d-flex justify-content-end text-uppercase font-weight-bold">Join Now</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                        </>
            }
                    </div>
              


        </div>
    );
};

export default SingleClass;