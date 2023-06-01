import React from 'react'
import { List } from 'reactstrap'
import './Announcement.css'
import { useState,useEffect } from 'react'
import axios from 'axios'


const HomePageAnnouncement = () => {

    const [data, setData] = useState([]);
   

    useEffect(() => {
        axios.get('http://localhost:8080/amt/getlist').then(response => {
            setData(response.data);
            // console.log("1")
            
        }).catch(error => {
            console.error(error);
        });
    },[data]);

    return (
        <div  style={{ border: '1px solid blue', borderRadius: '5px', boxShadow: '1px 2px 9px ' }}>
        
            <div  style ={{textAlign:'center'}}>
                <h3 >Announcement List</h3>
               {data.map((amt) => (<li key={amt.id} style={{padding:'3px'}}>{amt.title}</li>))}
               
            </div>
        </div>
    )
}
export default HomePageAnnouncement;



