import React from 'react';
import './SeismicMaps.css';


import MapComponent from './SeismicMapComponent';


function SiesmicMaps() {
  return (
    <div className='body'>
      {/* <div className="box">

      </div> */}
      <div className="__map">
        <MapComponent/>
      </div>
    </div>
  )
}

export default SiesmicMaps;
