import { Button } from 'bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogout=()=>{

    const navigate=useNavigate();
    function deletetoken(){
        console.log("button is working")
        sessionStorage.setItem("token","")
        navigate("/")}

    function cancel(){
        navigate("/admin")
    }
    return(
        <div>

            <div className='container'  style={{justifyContent:'center',justifyItems:'center',marginLeft:'420px',marginTop:'170px',outline:' solid 1px black',minHeight:'200px',minWidth:'40px',maxWidth:'500px',border: '1px solid blue', borderRadius: '5px', boxShadow: '1px 2px 9px ' }}>
                <h1 style={{textAlign:'center'}}>
                Are you sure you want to logout?
                </h1>
                
                
                <div className='container' style={{alignItems:'center',alignContent:'center',textAlign:'center',whiteSpace:'normal',marginTop:'30px'}} >
                <button type="button" class="btn btn-danger" onClick={deletetoken} style={{margin:'20px'}}>Logout</button>
                <button type="button" class="btn btn-warning" onClick={cancel}>Cancel</button>
                </div>
                


                {/* <Button>Cancel</Button> */}
            </div>
        </div>

    )
}
export default AdminLogout;
