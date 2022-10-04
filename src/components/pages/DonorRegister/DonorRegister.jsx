import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar'
import './DonorRegister.css'
import * as yup from 'yup';
function DonorRegister() {


  const validSchema = yup.object().shape({
    firstName: yup.string().matches(/^\S/, 'Whitespace is not allowed').required('Firstname is required'),
    lastName: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    motherName: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    fatherName: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    mobNum: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    age: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    address: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    gender: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    bloodGroup: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    district: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
    dob: yup.string().matches(/^\S/, 'Whitespace is not allowed'),
   
    
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      motherName: '',
      fatherName: '',
      mobNum: '',
      age:'',
      address:'',
      gender:'',
      bloodGroup:'',
      district:'',
      dob:'',
      pincode:''

    },
    onSubmit: values => {

      const requestData=  {
        "firstName":values.firstName,
             "lastName": values.lastName,
             "motherName":values.motherName,
             "fatherName":values.fatherName,
             "mobNum":values.mobNum,
             "address" : values.address,
             "gender": values.gender,
             "bloodGroup":values.bloodGroup,
             "district":values.district,
             "dob": values.dob,
             "pincode":values.pincode
      }

     const serviceURL="http://localhost:5000/donorRegistration";

      console.log(values);
      axios.post(serviceURL,requestData).then((res) => {
        alert(JSON.stringify(values, null, 2));
      }).catch((err)=>{
console.log(err);
alert(err)
      })

      
    },
  });

    //  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = Formik;
    

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

             <form onSubmit={formik.handleSubmit}>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name='firstName'  onChange={formik.handleChange} value={formik.values.firstName} id="form3Example1m" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name='lastName'  onChange={formik.handleChange} value={formik.values.lastName} id="form3Example1n" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name='motherName'  onChange={formik.handleChange} value={formik.values.motherName} id="form3Example1m1" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name='fatherName'  onChange={formik.handleChange} value={formik.values.fatherName} id="form3Example1n1" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name='mobNum'  onChange={formik.handleChange} value={formik.values.mobNum} id="form3Example1m1" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1m1">Mobile Number</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" name='age'  onChange={formik.handleChange} value={formik.values.age} id="form3Example1n1" class="form-control form-control-lg" required/>
                      <label class="form-label" for="form3Example1n1">Age</label>
                    </div>
                  </div>
                </div>

               

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8"  name='address'  onChange={formik.handleChange} value={formik.values.address} class="form-control form-control-lg" required/>
                  <label class="form-label" for="form3Example8">Address</label>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="gender" onChange={formik.handleChange} value="Female"  id="femaleGender"
                       required/>
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="gender" onChange={formik.handleChange}  id="maleGender"
                      value="Male" required/>
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio"  name="gender" onChange={formik.handleChange} id="otherGender"
                      value="other" required/>
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <select name="bloodGroup" onChange={formik.handleChange} class="select" required>
                    
                      <option value="">Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="O+">O+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                      <option value="A-">A-</option>
                      <option value="O-">O-</option>
                      <option value="B-">B-</option>
                      <option value="AB-">AB-</option>
                    </select>

                  </div>
                  <div class="col-md-6 mb-4">

                    <select name="district" onChange={formik.handleChange} class="select" required>
                      <option value="">District</option>
                      <option value="Alappuzha">Alappuzha</option>
                      <option value="Ernakulam">Ernakulam</option>
                      <option value="Idukki">Idukki</option>
                      <option value="Kannur">Kannur</option>
                      <option value="Kasargod">Kasargod</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Kottayam">Kottayam</option>
                      <option value="Kozhikode">Kozhikode</option>
                      <option value="Malappuram">Malappuram</option>
                      <option value="Palakkad">Palakkad</option>
                      <option value="Pathanamthitta">Pathanamthitta</option>
                      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Wayanad">Wayanad</option>
                    </select>

                  </div>
                </div>
                
                <div class="form-outline mb-4">
                  <input type="date" name="dob" onChange={formik.handleChange} class="form-control " placeholder='Enter DOB' required/>
                  <label class="form-label" for="form3Example9">DOB</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" name='pincode' onChange={formik.handleChange} id="form3Example90" class="form-control form-control-lg" required/>
                  <label class="form-label" for="form3Example90">Pincode</label>
                </div>

                

                <div class="d-flex justify-content-end pt-3">
                  <button type="reset" class="btn btn-light btn-lg">Reset all</button>
                  <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>
                </form>
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


