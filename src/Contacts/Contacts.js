import React from 'react';
import './Contacts.css'
import facebook from '../images/icons/facebook.png'
import gmail from '../images/icons/gmail.png'
import linkedin from '../images/icons/linkedin.png'
const Contacts = () => {
    return (
        <div className="container p-5">
            <h1 className='pb-3'>CONTACT ME</h1>
            <div className="container contactDes ">
                <div className="row">
                    <div className="row">
                            <div className="col-lg-1 mb-2">
                                <img src={facebook} className='' width='30' alt="" srcset=""/>
                            </div>
                            <div className="col-lg-11">
                                <h6 className=''>facebook.com/salithahmed.saad/</h6>
                            </div>


                        <div className="col-lg-1 mb-2">
                            <img src={gmail} className='' width='30' alt="" srcset=""/>
                        </div>
                        <div className="col-lg-11">
                            <h6 className=''>salithanwar69@gmail.com</h6>
                        </div>

                        <div className="col-lg-1 mb-2">
                            <img src={linkedin} className='' width='30' alt="" srcset=""/>
                        </div>
                        <div className="col-lg-11">
                            <h6 className=''>linkedin.com/in/salith-anwar-372276208/</h6>
                        </div>
                    </div>
                    {/* <div className="">
                        <img src={gmail} width='40'  alt="" srcset="" />
                        <h3>salithanwar69@gmail.com</h3>
                    </div>
                    <div className="">
                        <img src={linkedin} width='40'  alt="" srcset="" />
                        <h3>Salith Anwar</h3>
                    </div> */}
                </div>

            </div>
            {/* <h3>Salith Anwar</h3>
                <h3>salithanwar69@gmail.com</h3> */}
        </div>
    );
};

export default Contacts;