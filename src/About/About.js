import React from 'react';
import Typing from 'react-typing-animation';
import './About.css'
import myImg from '../images/myImg.jpg'
import projects from '../images/icons/copywriting.png'
import programming from '../images/icons/programming.png'
import design from '../images/icons/web-design.png'
import done from '../images/icons/thumbs-up.png'
const About = () => {
    return (
        <div className=' aboutBody pb-5'>
            <h1 className='text-center pt-5'>ABOUT ME</h1>
            {/* <p className='text-center mt-5 mb-5'>I design and develop services for customers of all sizes, specializing in
                <br/>
                creating stylish, modern websites</p> */}
                 <Typing className='text-center mt-5 mb-5'>I design and develop services for customers of all sizes, specializing in
                <br/>
                creating stylish, modern websites</Typing>

            <div className="firstCard container ">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={myImg} className="myImg" alt="" srcset=""/>
                    </div>
                    <div className="col-lg-6">
                        <h3 className='mt-5'>I'm Salith Bin Anwar</h3>
                       
                        <p className='mb-3'>I design and develop services for customers of all sizes,
                            specializing in creating stylish, modern websites, web services and online
                            stores.
                        </p>

                        {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet diam nonummy.</p> */}
                        <div className="row mt-5 ">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={projects} alt="" width="50" srcset=""/>
                                    </div>
                                    <div className="col-lg-9">
                                        <h6>1year experience</h6>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={programming} alt="" width="50" srcset=""/>
                                    </div>
                                    <div className="col-lg-9">
                                        <h6>React,JavaScript,HTML,
                                            <br/>css, nodeJS
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-5">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={design} alt="" width="50" srcset=""/>
                                    </div>
                                    <div className="col-lg-9">
                                        <h6>web design and develop</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-5 ">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={done} alt="" width="50" srcset=""/>
                                    </div>
                                    <div className="col-lg-9">
                                        <h6>28 projects done</h6>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-warning mt-4">DOWNLOAD RESUME</button>
         
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;