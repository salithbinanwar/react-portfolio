import React from 'react';

import bag from '../images/backpack.png'
import ship from '../images/cruiseShip.png'
import music from '../images/hardRock.png'
import './Work.css'
const Work = () => {
    return (
        <div className='workBody'>
            <div className="container">
                <h1>My works</h1>
                <div className="row">
                    <div className="col-lg-4 cred crowd">
                        <img src={bag} width="100%" class="image" alt="" srcset=""/> {/* <img src="img_avatar.png" alt="Avatar" class="image"> */}
                        <div class="overlay">
                            <div class="text ">
                                Penguin Fasions
                                <br />
                                An ecommerce site where you can buy bags
                                <br/>
                                (<a target="_blank" href="https://salithbinanwar.github.io/bag-buyers/">website Link</a>)</div>
                                

                        </div>

                    </div>
                    <div className="col-lg-4 cred  crowd">
                        <img src={ship} width="100%" class="image" alt="" srcset=""/>
                        <div class="overlay">
                            <div class="text ">
                                Curise ship
                                <br />
                                design of booking system
                                <br/>
                                (<a target="_blank" href="https://salithbinanwar.github.io/curiseShip/">website Link</a>)</div>
                                

                        </div>
                    </div>
                    <div className="col-lg-4 cred crowd">
                        <img src={music} width="100%" class="image" alt="" srcset=""/>
                        <div class="overlay">
                            <div class="text ">
                                Hard Rock Music 
                                <br />
                                search music and enjoy!
                                <br/>
                                (<a target="_blank" href="https://salithbinanwar.github.io/hardRockMusic/">website Link</a>)</div>
                                

                        </div>
                    </div>
                </div>
                <div className="row">
                {/* <div className="col-lg-4 cred crowd">
                        <img src={bag} width="100%" class="image" alt="" srcset=""/> 
                        <div class="overlay">
                            <div class="text ">
                                Penguin Fasions
                                <br />
                                An ecommerce site where you can buy bags
                                <br/>
                                (<a target="_blank" href="https://salithbinanwar.github.io/bag-buyers/">website Link</a>)</div>
                                

                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Work;