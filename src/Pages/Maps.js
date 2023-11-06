import React from 'react';
import { NavLink } from 'react-router-dom';
import './Maps.css';

function Maps() {
  return (
    <div>
      <div className="Maps-main">
          <NavLink to="/seismic_maps" className="map1">
              <div className="seismic-zone">
                <div className="map-photo">
                    
                </div>
                <div className="map-description">
                  <div className="heading">
                      Seismic Zones Of India
                  </div>
                  <div className="sub-heading">
                      Lorem ipsum dolor sit amet.
                  </div >
                  <div className="map-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur odio in atque dolore saepe inventore! Quos vitae pariatur tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam omnis nostrum iste nisi impedit modi dolore numquam dicta, magni iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, vitae.
                    </div>
                      
                </div>
              </div>
          </NavLink>

          <NavLink to="/wind_maps" className="map2">
              <div className="wind-zone">
                <div className="map-photo">

                </div>
                <div className="map-description">
                    <div className="heading">
                        Wind Zones Of India
                    </div>
                    <div className="sub-heading">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="map-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatem soluta repellendus at maiores quia minus a ad animi sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda quasi suscipit neque consectetur rem consequuntur excepturi sed quisquam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid.
                    </div>
                        
                </div>
              </div>  
          </NavLink>

          <NavLink to="/snow_maps" className="map3">
              <div className="snow-zone">
                <div className="map-photo">

                </div>
                <div className="map-description">
                    <div className="heading">
                        Snow Zones of India
                    </div>
                    <div className="sub-heading">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="map-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat maiores mollitia aspernatur nam consequatur asperiores incidunt doloribus nemo ad id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui magni a voluptate corrupti placeat aut eveniet? Nihil facilis natus ut sequi reiciendis! Sequi molestiae libero in! Quaerat, laborum nemo?
                    </div>


                
                </div>
            </div>
          </NavLink>  
        
        
        
      </div>
    </div>
  )
}

export default Maps
