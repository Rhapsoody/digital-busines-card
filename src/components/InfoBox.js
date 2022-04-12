import React from 'react';
import businessImg from '../images/business-img.jpg'

export default function InfoBox(){
    return (
       <div className="infobox">
            <img src={businessImg} alt="business img"/>
            <h1 className="name">Laura Marconi</h1>
            <h3 className='jobName'>Front End Web Dev</h3>
            <small className='website' >laura.marco.website</small>
            <div className="buttons">
                <button className="email">
                    email
                </button>
                <button className="linkedin">
                    linkedin
                </button>
            </div>
       </div>
    );
}