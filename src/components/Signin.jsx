import React, { useState } from "react";
import "./signin.css"
import NavBar from "./NavBar";
import Footer from "./Footer";


function Signin() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");

  const handlename = (e) => setname(e.target.value);
  const handlemobile = (e) => setmobile(e.target.value);


  return (
    <div>
 <NavBar/>
        <form>

          <div className="form-container">
            <h1 style={{textAlign:"center"}}>Sign in</h1>
<br/>
            <div className="form-row">
               <label>EMAIL</label> 
                <input type="text" onChange={handlename} placeholder="Enter Your Email" />
            </div>

            <div className="form-row">
                <label>PASSWORD </label> 
                <input type="password" onChange={handlemobile} placeholder="Enter Your Password" />
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
