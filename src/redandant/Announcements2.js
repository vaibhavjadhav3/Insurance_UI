import React, { useState } from 'react';
import DynamicForm from '../components/Form_template';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Amtservice from '../services/Amtservice';

function Acp() {
  const [data, setData] = useState([
    {  announcement: "",
     description: "", 
     date: "" },
   ]);
  const [modal, setModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  }

  const formFields = [
    { name: "announcement", label: "Announcement", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "date", label: "Date", type: "date" },
  ]


  function handleAdd(e){
    e.preventDefault();
    Amtservice.saveAmt(amt).then((resposne)=>{
      console.log("Added");setData( {  announcement: "",
      description: "", 
      date: "" });})
      .catch((error)=>{console.log(error)})
  }
  

  function handleEdit(id) {
    const editData = data.find(item => item.id === id);
    setCurrentEdit(editData);
    toggleModal();
  }

  function handleUpdate(updatedData) 
  {
    setData(data.map(item => item.id === updatedData.id ? updatedData : item));
    toggleModal();
  }

  return (
    <div className='row'>
      
      <div className="col-md-5" >
        <DynamicForm formFields={formFields} onSubmit={handleAdd} value />
        
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Edit Announcement</ModalHeader>
          <ModalBody>
           <DynamicForm  formFields={formFields} onSubmit={handleUpdate} initialData={currentEdit} />
          </ModalBody>
          {/* <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
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
            {
              data.map((event) => (
                <tr key={event.id}>
                  <td>{event.announcement}</td>
                  <td>{event.description}</td>
                  <td>{event.date}</td>
                  <td><Button color='warning' onClick={() => handleEdit(event.id)}><FontAwesomeIcon icon={faEdit} /></Button></td>
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
