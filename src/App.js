
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import DonorRegister from './components/pages/DonorRegister/DonorRegister';
import DonorFinder from './components/pages/DonorFind/DonorFind';

function App() {
  return (
    <div className="App">
     
   <Router>
   <Routes>

   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/Register" element={<DonorRegister/>}/>
   <Route exact path="/FindDonor" element={<DonorFinder/>}/>
   
   </Routes>
   </Router>
     
    </div>
  );
}

export default App;
