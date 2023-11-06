import React from 'react'
import './Courses.css';


function Courses() {
  return (
    <div className="courses">
      <div className="courses_main">
        <div className="description">
            <div className="description1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta amet, ratione iure impedit voluptatum laboriosam voluptatibus quidem ipsam ea accusamus nostrum eos exercitationem, consectetur, eius tempora odio eum quibusdam dolorem! Totam, provident sapiente culpa magni eos atque ipsum doloribus esse unde similique? Sed nisi quod maiores, molestiae debitis eos tempora ipsa voluptatem culpa corrupti ipsam error, cupiditate animi, quis reiciendis. Commodi, sequi expedita omnis esse eum distinctio laboriosam repellendus nemo quisquam neque ipsa reiciendis, quae asperiores a repudiandae iure aut harum rerum praesentium unde officiis quam tenetur, alias similique! Inventore obcaecati quisquam earum fuga perspiciatis ut vel, qui pariatur vitae!
            </div>
            <div className="description2">

            </div>
        </div>
        <hr className="stroke"/> 
        <div className="ug-courses">
            <div className="ug-courses-header">
              Under-Graduate Level Courses [L-T-P]
            </div>
            <div className="ug-courses-description">
              <div className="ug-courses-summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et temporibus, cumque nobis tempore quos sapiente natus rerum consequatur est deserunt cupiditate sint dolores rem autem hic perferendis libero. Aliquid neque, corporis rerum quis ipsam quos, explicabo consectetur quo veniam accusantium alias, eaque cumque! Vel dicta id accusamus, earum animi aperiam consectetur odio ea explicabo dolore sunt recusandae cupiditate laborum vero, quidem dolorum, beatae qui saepe quia possimus temporibus! Hic quia quisquam quo odio. Tenetur porro enim dolorem dolor a! Enim .
              </div>
              <div className="ug-courses-list">
                <ol>
                  <li>Mechanics of Solid [3-0-0]</li>
                  <li>Reinforced Concrete Design [3-0-2]</li>
                  <li>Design of Steel Elements [3-0-0]</li>
                  <li>Dynamics of Structures [3-1-0]</li>
                  <li>Structural Analysis - III [3-0-0]</li>
                  <li>Transportation Engineering - II [3-0-0]</li>
                  <li>Strength of Materials Laboratory [0-0-2]</li>
                  <li>Fluid Mechanics Laboratory [0-0-2]</li>
                  <li>Construction Technology and Practices Laboratory [0-0-2]</li>

                </ol>

              </div>

            </div>
          
        </div>
        <hr className="stroke"/>
        <div className="pg-courses">
          <div className="pg-courses-header">
                Post-Graduate Level Courses [L-T-P]
          </div>
            <div className="pg-courses-description">
              <div className="pg-courses-summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et temporibus, cumque nobis tempore quos sapiente natus rerum consequatur est deserunt cupiditate sint dolores rem autem hic perferendis libero. Aliquid neque, corporis rerum quis ipsam quos, explicabo consectetur quo veniam accusantium alias, eaque cumque! Vel dicta id accusamus, earum animi aperiam consectetur odio ea explicabo dolore sunt recusandae cupiditate laborum vero, quidem dolorum, beatae qui saepe quia possimus temporibus! Hic quia quisquam quo odio. Tenetur porro enim dolorem dolor a! Enim .
              </div>
              <div className="pg-courses-list">
                <ol>
                  <li>Offshore Wind Energy Harvesting [3-0-0]</li>
                  <li>Wind Turbine and Field Design [3-0-2]</li>
                  <li>Wind and Earthquake Engineering [3-0-0]</li>
                </ol>

              </div>

            </div>
          
        </div>
        <hr className="stroke"/>
        <div className="short-term-courses">
          <div className="short-term-courses-header">
                Short-term Courses
          </div>
          <div className="short-term-courses-list">
                <ol>
                  <li>Structural Health Monitoring, A short-term online course under Management Development Program (MDP) on Smart Infrastructure and Sustainability organized by IITJ Technology Innovation and Start-up Center (IIT-TISC), Indian Institute of Technology Jodhpur, India, 03-07 January 2022.</li>
                </ol>
          </div>

          
        </div>
      </div>
    </div>
    
  )
}

export default Courses
