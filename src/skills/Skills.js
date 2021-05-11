import React, { useEffect, useState } from 'react';
import './Skills.css'
import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
const [counter, setCounter] = useState(0)
const [counter1,setCounter1] = useState(0)
const [counter2,setCounter2] = useState(0)
const [counter3,setCounter3] = useState(0)
useEffect(() =>{
    if (counter < 85) {
        setTimeout(()=> setCounter(counter+1),90)       
    }
    if (counter1 < 73) {
        setTimeout(()=> setCounter1(counter1+1),95)       
    }
    if (counter2 < 56) {
        setTimeout(()=> setCounter2(counter2+1),120)       
    }
    if(counter3 < 30){
        setTimeout(()=> setCounter3(counter3+1),120)
    }
},[counter, counter1,counter2,counter3])
    return (
        <div className=' skillBody'>
            <div className="container">
                <h1 className='text-center'>My skills</h1>
                <div className="row mb-3">
                    <div className="col-lg-5 mt-2">
                        <h1>HTML</h1>
                        <ProgressBar
                            // labelAlignment='left'
                            labelColor='black'
                            bgColor='#a44eaf'
                            width='90%'
                            transitionTimingFunction='ease'
                            completed={counter}/>

                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5 mt-2">
                        <h1>CSS</h1>
                        <ProgressBar
                            // labelAlignment='left'
                            labelColor='black'
                            bgColor='#a44eaf'
                            width='90%'
                            transitionTimingFunction='ease'
                            completed={counter1}/>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-5">
                        <h1>JAVASCRIPT</h1>
                        <ProgressBar
                            // labelAlignment='left'
                            labelColor='black'
                            bgColor='#a44eaf'
                            width='90%'
                            transitionTimingFunction='ease'
                            completed={counter2}/>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5">
                        <h1>Node js</h1>
                        <ProgressBar
                            // labelAlignment='left'
                            labelColor='black'
                            bgColor='#a44eaf'
                            width='90%'
                            transitionTimingFunction='ease'
                            completed={counter3}/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;