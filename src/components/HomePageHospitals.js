import React from 'react'

import './Announcement.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


const HomePageHospital = () => {


    const [data, setData] = useState([]);


    useEffect(() => {
        console.log("hi")
        axios.get('http://localhost:8080/hospital/getlist').then(response => {
            setData(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);


    return (
        <div style={{ border: '1px solid blue', borderRadius: '5px', boxShadow: '1px 2px 9px ' }}>


            <div>
            <h3 style ={{textAlign:'center'}}>Hospitals List</h3>
            {data.map((hospital) => 
            (<li style ={{textAlign:'center',padding:'3px'}}  key={hospital.id}>{hospital.hospitalName}</li>))}
            </div>
           



        </div>
    )
}
export default HomePageHospital;



