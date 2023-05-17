

import React, {  useState, useEffect } from 'react';
import axios from 'axios'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTrash, faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';



//Has a form div on left and list div on right of the page
function HospitalPage() {

  const [data, setData] = useState([]);
  const [currentEdit, setCurrentEdit] = useState([]);/*for storing the values enetered in modal when we want to edit the values*/

  //'http://localhost:8080/hospital/getlist'

  useEffect(() => {
    axios.get('http://localhost:8080/hospital/getlist').then(response => {
      setData(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, [data]);/*makes sure that the list is reloaded whenever there is chnage in data(i.e list retrived through API call ) */



  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalCity: '',
  });

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    console.log("Chnage registered")
  };


  const handleInputChangeforedit = (event) => {
    const { name, value } = event.target;
    setCurrentEdit({ ...currentEdit, [name]: value });/*Sets the changed data to currentEdit
     which can be used later to pass to handlesave() which is invoed when clicked on save changes
     */

    console.log("Chnage registered in edit modal")
  };

  const handleAdd = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/hospital/savehospital', formData).then(response => {
      console.log("Form submitted")
      // handle successful submission
      // setData(response.data);

    }).catch(error => {
      console.error(error);
      // handle error
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/hospital/delete/${id}`).then(response => {

       console.log("Id deleted")
       /*console.log(resonse.data) */

    }).catch(error => {
      console.error(error);
    })
  }

  //When clicked on edit button the function recieved the id and populates the fields 
  const handleEdit = (id) => {
    const editData = data.find(item => item.id === id);//maps the data of clicked object 
    setCurrentEdit(editData);
    setData(data.map(item => item.id === currentEdit.id ? currentEdit : item));
    toggleModal();//open the modal which was false by default 

    console.log(data);
  }


  //Invoked when the edit modal is saved 
  const handleSave = () => {
    console.log("Save function called")
    const a = currentEdit.id
    axios.put(`http://localhost:8080/hospital/edit/${a}`, currentEdit)
      .then(response => {console.log(response)
        // setData(response.data); console.log("Id edited")

      }).catch(error => {
        console.error(error);
      })
    toggleModal();//closes the modal when clicked on save 
  }


  return (
    <div className="row">
      <Banner>

      </Banner>
      <Navbar></Navbar>

      <div className="col-md-4" style={{ paddingLeft: '100px', paddingTop: '50px' }}>
        <form onSubmit={handleAdd} >
          <h2>Add Hospital</h2>
          <div className="form-group" style={{ paddingTop: '20px' }}>
            <label htmlFor="hospitalName">Hospital Name:</label>
            <input type="text" name="hospitalName" className="form-control" id="hospitalName" onChange={handleInputChange} />
          </div>
          <div className="form-group" style={{ paddingTop: '20px' }}>
            <label htmlFor="hospitalCity">Hospital City:</label>
            <input type="text" name="hospitalCity" className="form-control" id="hospitalCity" onChange={handleInputChange} />
          </div>
          <div style={{ paddingTop: '20px' }}>
            <button type="submit" className="btn btn-primary" ><FontAwesomeIcon icon={faPlusSquare} />&nbsp;Add</button>
          </div>
        </form>



        <Modal isOpen={modal} toggle={toggleModal} >
          <ModalHeader toggle={toggleModal}>Edit Hospital</ModalHeader>
          <ModalBody>
            <form >
              <div className="form-group" style={{ paddingTop: '20px' }}>
                <label htmlFor="hospitalName">Hospital Name:</label>
                <input type="text" name="hospitalName" className="form-control" id="hospitalName" value={currentEdit.hospitalName} onChange={handleInputChangeforedit} />
              </div>
              <div className="form-group" style={{ paddingTop: '20px' }}>
                <label htmlFor="hospitalCity">Hospital City:</label>
                <input type="text" name="hospitalCity" className="form-control" id="hospitalCity" value={currentEdit.hospitalCity} onChange={handleInputChangeforedit} />
              </div>

            </form>

          </ModalBody>
          <ModalFooter>
            <div >
              <button type='button' onClick={handleSave} className="btn btn-primary" >Save</button>
              </div>
              <div>
              <button type='button' onClick={toggleModal} className="btn btn-primary" >Cancel</button>
            </div>
          </ModalFooter>

        </Modal>


      </div>

      <div className="col-md-8" style={{ paddingLeft: '120px', paddingTop: '50px', paddingRight: '50px' }}>
        <h3>Hospital List</h3>
        <table className="table">

          <thead>
            <tr>
              <th>City</th>
              <th>Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* Loop through hospital data and create a row for each hospital */}
            {data.map((hospital) => (
              <tr key={hospital.id}>
                <td style={{ width: "250px" }}>{hospital.hospitalCity}</td>
                <td style={{ width: "200px" }}>{hospital.hospitalName}</td>
                {/* <td ><Button color='danger' onClick={() => handleDelete(hospital.id)}><FontAwesomeIcon icon={faTrash} /></Button></td>
                <td><Button color='warning' onClick={() => handleEdit(hospital.id)}><FontAwesomeIcon icon={faEdit} /></Button></td> */}
                <td><Button color='danger' onClick={() => handleDelete(hospital.id)} style={{ width: "100px" }} >
                  <FontAwesomeIcon icon={faTrash} />&nbsp;
                  Delete
                </Button></td>
                <td><Button color='warning' onClick={() => handleEdit(hospital.id)} style={{ width: "90px" }}>
                  <FontAwesomeIcon icon={faEdit} />&nbsp;
                  Edit
                </Button></td>
              </tr>))}
          </tbody>
        </table>

      </div>

    </div>
  );
}


export default HospitalPage;



