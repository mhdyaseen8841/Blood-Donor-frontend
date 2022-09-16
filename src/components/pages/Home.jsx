import React from 'react'


import Navbar from '../Navbar/Navbar'
import Mainbody from '../mainbody/Mainbody'
import Count from '../count/Count'
import Services from '../services/Services'
import Doctors from '../doctors/Doctors'
import Testimonials from '../testimonials/Testimonials'
import Gallery from '../gallery/Gallery'
import Contact from '../contact/Contact'

function Home() {
  return (
    <div>

     <Navbar/>
     <Mainbody/>
     <Count/>
     <Services/>
     <Doctors/>
     <Testimonials/>
     <Gallery/>
     <Contact/>
     

    </div>
  )
}

export default Home