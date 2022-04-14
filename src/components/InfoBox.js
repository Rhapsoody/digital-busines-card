import React from 'react';
import businessImg from '../images/business-img.jpg'

export default function InfoBox(){
    return (
       <div className="infobox">
            <img src={businessImg} alt="business img"/>
            <h1 className="name">Laura Marconi</h1>
            <h3 className='jobName'>Front End Web Dev</h3>
            <p className='website' >laura.marco.website</p>
            <div className="buttons">
                <button className="Email">
                    <i class="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>
                <button className="linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>Linkedin</span>
                </button>
            </div>
       </div>
    );
}