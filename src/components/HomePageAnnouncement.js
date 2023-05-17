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
            
        }).catch(error => {
            console.error(error);
        });
    },[data]);

    return (
        <div className='col-md-5' style={{ border: '2px solid blue', borderRadius: '5px',  }}>
        
            <List >
                <h3>Announcement List</h3>
                
                {data.map((amt) => (<li key={amt.id}>{amt.title}</li>))}
               
            </List>
        </div>
    )
}
export default HomePageAnnouncement;



