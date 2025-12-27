import React, { useState } from "react";
import "./signin.css"
import NavBar from "./NavBar";
import Footer from "./Footer";


function Signin() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");

  const handlename = (e) => setname(e.target.value);
  const handlemobile = (e) => setmobile(e.target.value);
  const handleemail = (e) => setemail(e.target.value);


  return (
    <div>
 <NavBar/>
        <form>

          <div className="form-container">
            <h1 style={{textAlign:"center"}}>Form</h1>

            <div className="form-row">
               <label>FIRSTNAME</label> 
                <input type="text" onChange={handlename} placeholder="Enter Your Name" />
            </div>

            <div className="form-row">
                <label>MOBILE </label> 
                <input type="number" onChange={handlemobile} placeholder="Enter Your mobile" />
            </div>

            <div className="form-row">
                <label>EMAIL </label>
                <input type="email" onChange={handleemail} placeholder="Enter Your email" />
            </div>

            <br />
            <br />
            <button className="button">Submit</button>
          </div>
        </form>
<Footer/>
    </div>
  );
}

export default Signin;
