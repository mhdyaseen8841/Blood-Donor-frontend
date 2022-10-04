import React from 'react'
import { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import Navbar from '../../Navbar/Navbar'
import './DonorFinder.css'
import axios from 'axios';
function DonorFind() {
  



    const [donorList, setdonorList] = useState([])



    
    const columns = [
        {
          name: "name",
          label: "Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "district",
          label: "district",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "city",
          label: "City",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "BloodGroup",
          label: "Blood Group",
          options: {
            filter: true,
            sort: false,
          },
        },
          {
            name: "Contact",
            label: "Contact",
            options: {
              filter: true,
              sort: false,
            },
        },
      ];




      const data =  donorList.map(row=>(
        {
            "name": row.lastName,
            "district": row.district,
            "city": row.address,
            "BloodGroup": row.bloodGroup,
        "Contact": row.mobNum
      }))
       
        

      const options = {
        filterType: "checkbox",
      };


useEffect(() => {
    const serviceURL="http://localhost:5000/findDonor";
    axios.get(serviceURL,{}).then((res) => {
      console.log(res.data.result);
      setdonorList(res.data.result)
    }).catch((err)=>{
console.log(err);
alert(err)
    })

  }
, [])




    return (
        <div className='table-container'>
<Navbar/>
        <MUIDataTable
        title={"Donor List"}
        data={data}
        columns={columns}
        options={options}
        
      />

</div> 
  )
}

export default DonorFind