import React, { useState,useEffect } from 'react'

function DynamicForm({formFields, initialData })
{
    const[formData,setFormData]=useState({});

    useEffect(() => {
      setFormData(initialData || {});
    }, [initialData]);

    const handleInputChange=(e)=>
    {
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(formData);
        //or submit Api

    }
    
    return(
        <form onSubmit={handleSubmit} >
      {formFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            className="form-control"
            placeholder={field.label}
            id={field.name}
            value={formData[field.name] || ""}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    
        )

}
export default DynamicForm;
