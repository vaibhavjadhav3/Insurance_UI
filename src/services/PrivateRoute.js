import React from 'react'
import Navigate from "react-router-dom"
import useLocalState from "./useLocalStorage"
import { useNavigate } from 'react-router-dom';
const PrivateRoute=({children})=>{
    const navigate=useNavigate();
    // const jwt =localStorage.getItem("token")
    const jwt =sessionStorage.getItem("token")
        return jwt ? children :  navigate("/login");
}
export default PrivateRoute;