
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import DonorRegister from './components/pages/DonorRegister';

function App() {
  return (
    <div className="App">
     
   <Router>
   <Routes>

   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/Register" element={<DonorRegister/>}/>
   
   
   </Routes>
   </Router>
     
    </div>
  );
}

export default App;
