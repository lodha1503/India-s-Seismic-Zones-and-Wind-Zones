import React from 'react';
import './Opportunities.css'

function Opportunities() {
  return (
      <div className="opportunities">
        <div className="opportunities-main">
          <div className="opportunities-header">
            Opportunities
          </div>

          <div className="Phd-positions">
            <div className="Phd-positions-header">
              PhD positions
            </div>
            <div className="Phd-positions-list">
              <ol className="pos">
                <li>One PhD position in <b>Structural Reliability</b>. [Status: Open; Updated on: 09 August 2023]</li>
                <li>One PhD position in <b>Vision based Structural Health Monitoring</b>. [Status: Open; Updated on: 09 August 2023]</li>
                <li>One PhD position in <b>Energy Infrastructure</b>. [Status: Open; Updated on: 09 August 2023]</li>
              </ol>
              <div className="note1">
              Kindly fill this form and upload the desired information/documents/report. Also, note that separate email is not required. Candidates with programming skills in MATLAB, Python etc. will be preferred. The potential candidates will be contacted if found suitable. Moreoever, interested candidates are encouraged to apply for PhD positions through IIT Jodhpur MTech–PhD and PhD programs (this is an essential requirement for the consideration of application)
              </div>
            
            </div>
          </div>


          <div className="Internship-positions">
            <div className="Internship-positions-header">
              Internship positions
            </div>
            <div className="Internship-positions-list">
              <ol className="pos-Intern">
                <li>Two internship positions in <b>Vibration Control</b>. One is related to <b>ANSYS and MATLAB Interface</b>  and other is related to <b>Impact analysis</b>. [Status: Closed; Updated on: 09 August 2023]</li>
              </ol>
              <div className="note2">
              Kindly fill this form and upload the desired information. Also, note that separate email is not required. Candidates with acquaintance in ANSYS, MATLAB, Python etc. will be preferred. However, if one wish to learn sincerely is also encouraged to apply. The potential candidates will be contacted if found suitable. Moreoever, interested candidates are encouraged to apply through the Summer Internship Program of IIT Jodhpur.
              </div>
            
            </div>
          </div>

        </div>
      </div>

  )
}

export default Opportunities
