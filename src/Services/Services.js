import React from 'react';
import './Service.css'
import html5 from '../images/icons/html-5.png'
import react from '../images/icons/reactColor.png'
import nodejs from '../images/icons/Node.js_logo.svg'
const Services = () => {
    return (
        <div className='serviceBody  m-2'>
            <div className="container">
                <h1 className='text-center mb-5'>My services</h1>
                <p className="text-center h5 mb-5">
                    I design and develop services for customers of all sizes, specializing in
                    creating stylish, modern websites, web services and online stores.

                </p>
                <h1>The language i'll use</h1>
                <div className="row mt-4 mb-5">
                    <div className="col-lg-6 d-flex align-items-center mb-5">
                        <img src={html5} width='100' alt=""/>
                        <h4>HTML
                        </h4>
                    </div>

                    <div className="col-lg-6 d-flex align-items-center">
                        <img src={react} width='100' alt=""/>
                        <h4>REACT
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-lg-6">
                            <img src={nodejs} width='100' alt=""/>
                            <h4>NODE JS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;