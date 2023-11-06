import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {
    return (
    <div className="header">

        <div className="container">
            <NavLink to="/" className="ak_rathi">
                  <div className="part1" >
                        <div className="text">Dr.Amit Kumar Rathi</div>
                  </div>
            </NavLink>
          
          
          <ul className="part2">
                <li >
                      <NavLink to="/" id="one">Home</NavLink> 
                </li>
                <li >
                      <NavLink to="/courses" id="two">Courses</NavLink> 
                </li>
                <li >
                      <NavLink to="/rnw" id="three">Research</NavLink> 
                </li>
                <li >
                      <NavLink to="/publications" id="four">Publications</NavLink> 
                </li>
                <li >
                      <NavLink to="/opportunities" id="five">Opportunities</NavLink> 
                </li>
                <li >
                      <NavLink to="/Maps" id="six">Maps</NavLink> 
                </li>
                
          </ul>
        </div>
          
          

    </div>
    );
}