

import React from 'react';
import DynamicForm from '../components/Form_template';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';

function Acp() {
    console.log("hii");


    const data=[
        {announcement:"HII",description:"BYee",date:"5/5/2020"},{}
    ]

    const formFields=[
        { name: "announcement", label: "Announcement", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "date", label: "Date", type: "date" },
   
    ]

    function handleDelete(){}
    function handleEdit(){}


    return(
        <div className='row'>

            <div className="col-md-5" >
            <DynamicForm formFields={formFields} />
            </div>
            <div className='col-md-7'>
                <h3>Announcements</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Announcement</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*data for now isnt defined but will be announments JSOn objects  */
                            data.map((event)=>(
                                <tr key={event.id}>
                                    
                                    <td>{event.announcement}</td>
                                    <td>{event.description}</td>
                                    <td>{event.date}</td>
                                    <td><Button color='danger' onClick={()=>handleDelete(event.id)}><FontAwesomeIcon icon={faTrash} /></Button></td>
                                    <td><Button color='warning' onClick={()=>handleEdit(event.id)}><FontAwesomeIcon icon={faEdit}/></Button></td>
                  
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
             
        
        </div>
      
    )
    
}
export default Acp;