import React, { useState } from 'react';
import axios from 'axios';


//created just a form which can be used to test the form fucntions 
//not meant to used in page

function MyForm() {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalCity: '',
    hospitalUniqueId: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log(formData)
    event.preventDefault();
    axios.post('http://localhost:8080/hospital/savehospital', formData)
      .then(response => {
        console.log("Form Submiitrd")
        // handle successful submission
      })
      .catch(error => {
        // handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hospitalName">Hospital Name:</label>
        <input type="text" id="hospitalName" name="hospitalName" value={formData.hospitalName} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="hospitalCity">Hospital City:</label>
        <input type="text" id="hospitalCity" name="hospitalCity" value={formData.hospitalCity} onChange={handleInputChange} />
      </div>
      {/* <div>
        <label htmlFor="hospitalUniqueId">Hospital Unique ID:</label>
        <input type="text" id="hospitalUniqueId" name="hospitalUniqueId" value={formData.hospitalUniqueId} onChange={handleInputChange} />
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
