import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Opportunities from './Pages/Opportunities';
import Publications from './Pages/Publications';
import ResearchWork from './Pages/ResearchWork';
import Maps from './Pages/Maps';
import SeismicMaps from './Pages/SeismicMaps';
import WindMaps from './Pages/WindMaps';
import SnowMaps from './Pages/SnowMaps';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses/>} / >
          <Route path="/opportunities" element={<Opportunities/>} / >
          <Route path="/publications" element={<Publications/>} / >
          <Route path="/rnw" element={<ResearchWork/>} / >
          <Route path="/Maps" element={<Maps/>} / >
          <Route path="/seismic_maps" element={<SeismicMaps/>} / >
          <Route path="/wind_maps" element={<WindMaps/>} / >
          <Route path="/snow_maps" element={<SnowMaps/>} / >
          
        </Routes>
      </Router>
    </div>
  );
}
