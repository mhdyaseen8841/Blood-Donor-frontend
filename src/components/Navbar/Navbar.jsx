import React from 'react'
import {  useNavigate } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const navigate = useNavigate();

function goHome(){
  navigate('/')
}
function goRegister(){
  navigate('/register')
}
function findDonor(){
  navigate('/FindDonor')
}

  return (
    <div>

  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
    {/*  */}
      <h1 class="logo me-auto" onClick={goHome }><a  >Medilab</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/apple-touch-icon.png" alt="" class="img-fluid"/></a> */}
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a onClick={goHome } class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a onClick={findDonor} class="nav-link scrollto" href="#about">Find Donor</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
     
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* onClick={ navigate('/register')} */}
      <a  onClick={goRegister} href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Register as </span> Donor</a>

    </div>
  </header>


    </div>
  )
}

export default Navbar