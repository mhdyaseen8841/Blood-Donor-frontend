import React from 'react'
import Navbar from '../Navbar/Navbar'
import './DonorRegister.css'
function DonorRegister() {


 


    

  return (
    
   <div>
       <Navbar/>
       <section class="h-100 bg-dark">
  <div class="container py-2 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"}
                alt="Sample photo" class="img-fluid reg-image"
                 />
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Donor registration form</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" required/>
                  <label class="form-label" for="form3Example8">Mobile number</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" required/>
                  <label class="form-label" for="form3Example8">Address</label>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" required/>
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" required/>
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" required/>
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <select class="select" required>
                    
                      <option value="1">Blood Group</option>
                      <option value="2">A+</option>
                      <option value="3">O+</option>
                      <option value="4">B+</option>
                      <option value="5">AB+</option>
                      <option value="6">A-</option>
                      <option value="7">O-</option>
                      <option value="8">B-</option>
                      <option value="9">AB-</option>
                    </select>

                  </div>
                  <div class="col-md-6 mb-4">

                    <select class="select" required>
                      <option value="1">District</option>
                      <option value="2">Alappuzha</option>
                      <option value="3">Ernakulam</option>
                      <option value="4">Idukki</option>
                      <option value="5">Kannur</option>
                      <option value="6">Kasargod</option>
                      <option value="7">Kollam</option>
                      <option value="8">Kottayam</option>
                      <option value="9">Kozhikode</option>
                      <option value="10">Malappuram</option>
                      <option value="11">Palakkad</option>
                      <option value="12">Pathanamthitta</option>
                      <option value="13">Thiruvananthapuram</option>
                      <option value="14">Thrissur</option>
                      <option value="8">Wayanad</option>
                    </select>

                  </div>
                </div>
                
                <div class="form-outline mb-4">
                  <input type="date" name="birthday" class="form-control " placeholder='Enter DOB' required/>
                  <label class="form-label" for="form3Example9">DOB</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" required/>
                  <label class="form-label" for="form3Example90">Pincode</label>
                </div>

                

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg">Reset all</button>
                  <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
   </div>
  )
}

export default DonorRegister


