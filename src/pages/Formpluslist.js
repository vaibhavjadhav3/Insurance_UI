import React, { useState } from 'react';
// import { Form } from 'reactstrap';
import MyForm from './Form';
import HospitalPage from './HospitalList';


/*Combines two JS pages Form and Hospital List to check for possiblities of testing componenets independent
abilities*/


function Form_list(){
    const[state,setState]=useState(0);
  return(  <div style={{ display:'-ms-grid',  alignItems: "center", gap: "20px" }}>
  <MyForm count={state.count} />
  <HospitalPage />
</div>
)
// div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
}
export default Form_list;