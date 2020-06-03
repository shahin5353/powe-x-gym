import React, { useState, useEffect } from 'react';
import './Classes.scss'
import Spinner from '../../images/Logo-Preloaders.gif'
import { Link } from 'react-router-dom';

const Classes = () => {
    const [classes, setClasses] = useState(null);
    useEffect(()=>{
        fetch('https://power-x-gym.herokuapp.com/classes')
        .then(res => res.json())
        .then(data => {
            setClasses(data)
            document.getElementById('spinner').style.display = 'none';
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div>

<div className="jumbotron jumbotron-fluid">
                <h1 className="text-center display-3 font-weight-bold text-uppercase">our classes</h1>
            </div>

            <div class="container">
            <div className="d-flex justify-content-center">
                        <img id="spinner" src={Spinner} alt="spinner" />
                    </div>
                  <div className="row">
                    {
                        classes &&
                        classes.map((singleClass) => {
                            return (
                                

                                <div class='col-md-4 classes'>
                                  <div className="card border-0 text-uppercase">
                                      <img className="card-img-top img-fluid" style={{height:'40vh',width:'100%'}} src={singleClass.img} alt=""/>
                                      <div className="card-body class-btn">
                                  <Link className="btn btn-warning btn-block font-weight-bold py-0" to={`/class/${singleClass._id}`}>
                                        {singleClass.title} &#10132;
                                    </Link>
                                  </div>
                                  </div>
                                  
                                </div> 
                            )
                        })
                    }
                  </div>

            </div>


        </div>
    );
};

export default Classes;
