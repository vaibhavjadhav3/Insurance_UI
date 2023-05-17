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
        <div className='col-md-5' style={{ border: '2px solid blue', borderRadius: '5px' }}>


            <h3>Hospitals List</h3>


            {data.map((hospital) => (<li key={hospital.id}>{hospital.hospitalName}</li>))}






        </div>
    )
}
export default HomePageHospital;



