import React from 'react';
import Typing from 'react-typing-animation';
// import backIMg from '../images/leaves.png'
import './Main.css'
const Main = () => {
    return (
        <div className='first-part' >
            <section className="container  ">
                <div className="">
                    <h3 className='text-center mt-5'>hello! I'm</h3>
                    <h1 className='text-center mt-3'>Salith Bin Anwar</h1>
                    <h3 className='autoText text-center'>
                        <Typing className='h4'>
                           Im Webdeveloper and Designer
                        </Typing>
                    </h3>

                </div>
            </section>
        </div>
    );
};

export default Main;