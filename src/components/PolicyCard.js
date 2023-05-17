import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";
import exampleImage from '../assests/example.jpg';

import "./PolicyCard.css"

const PolicyCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/policy/getlist')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    // <div className="card-wrapper" style={{ overflowX: "auto", whiteSpace: "nowrap",maxWidth:"1400px",padding:"0 15px",margin:"0 auto" }}>
    //   {data.map((policy) => (
    //     <Card  key={policy.id} style={{ display: "inline-block", width: "18rem", marginRight: "10px" }}>
    //       <img src={exampleImage} alt="Example" />
    //       <CardBody>
    //         <CardTitle tag="h5">{policy.policyName}</CardTitle>
    //         <CardSubtitle className="mb-2 text-muted" tag="h6">
    //           {policy.category}
    //         </CardSubtitle>
    //         <CardText>{policy.policyDsc}</CardText>
    //         <Button>Read more</Button>
    //       </CardBody>
    //     </Card>
    //   ))}
    // </div>

    <div>
        
<div class="container">
  
  <ul class="cards">
   
  {data.map((policy) => (
    <li class="card">
      <div>
        <h3 class="card-title">{policy.policyName}</h3>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            {policy.category}
             </CardSubtitle>
        <div class="card-content">
          <p>{policy.policyDsc}</p>
        </div>

      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>))}
   
  
    
  </ul>
</div>



    </div>
  );
};

export default PolicyCard;
