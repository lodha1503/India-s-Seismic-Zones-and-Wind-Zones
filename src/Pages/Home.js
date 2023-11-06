import React from "react";
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home'>
       
      <div className="total">
        <div className="main">

          <div className='left'>
            <div className='image'>
              <img src="http://home.iitj.ac.in/~akrathi/img/profile/Amit_Kumar_Rathi.jpg" alt="" className="ak" />
            </div>
              
          </div>

          <div className="right">
            <p className='first'>
                Hello
            </p>
            <p className="second">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="third">
            I am Dr. Amit Kumar Rathi and I'm currently serving as an Assistant Professor in the Department of Civil and Infrastructure Engineering, Indian Institute of Technology Jodhpur (IITJ), Rajasthan, India. My research area is in Structural Engineering and Applied Mechanics with keen interest in reliability analysis and design, uncertainty quantification, stochastic modelling and mechanics, laminated composite materials and vibration control. My Bachelor's degree was awarded by Faculty of Engineering, Jai Narain Vyas University, India in Civil Engineering. Further on, I completed Master’s degree from the Department of Civil Engineering at Indian Institute of Technology Guwahati (IITG), India. In 2019, I received my PhD in Structural Engineering from IITG. Before joining IITJ, I was affiliated with National Institute of Technology Sikkim (NITSkm) and National Institute of Technology Calicut (NITC).
            </p>

          </div>

        </div>
        <div className="options">
            <NavLink to="/rnw" className="opt-link-rnw">
                <div className="opt3">
                    Research Work
                </div>
            </NavLink>
            <NavLink to="/opportunities" className="opt-link-opportunities">
                <div className="opt3">
                    Opportunities
                </div>
            </NavLink>
          
            <NavLink to="/publications" className="opt-link-publications">
                <div className="opt3">
                  Publications
                </div>
            </NavLink>
          
        </div>

        
      </div>
  
    </div>
  )
}

export default Home
