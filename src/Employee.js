import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import "./style.css"

function Employee() {
  const UserContexts = useContext(UserContext);
  const [data, setdata] = useState([]);

  const employee = async (name) => {
    const values = await axios.post(
      `http://localhost:3001/employee/${name}`,
      name
    );
    console.log(values.data.collection);
    setdata(values.data.collection);
    UserContexts.setname("")
  };
  useEffect(() => {
    employee();
  }, []);

  return (
    <>
    
    <div className="container">
      <input
        placeholder="enter ur name"
        onChange={(e) => UserContexts.setname(e.target.value)}
      ></input>
      <button type="button" onClick={() => employee(UserContexts.name)}class="btn btn-primary">Employee</button>
      
      </div>
      {data.map((ele) => {
        return (
          <>
           <div class="container-lg">
  <div class="row">
    
    <div class="col-lg-6 ">
     <label className="label">Name:</label>
     {ele.name}
    </div>
    <div class="col-lg-6">
    <label className="label">Phone Number:</label>{ele.phonenumber}
    </div>
  </div>
  <div class="row">
    
    <div class="col-lg-6">
    <label className="label">Street:</label>
    {ele.address.street}
    </div>
    <div class="col-lg-6">
    <label className="label">Landmark:</label>
    {ele.address.landmark}
    </div>
  </div>
  <div class="row">
  
    <div class="col-lg-6">
    <label className="label">City:</label>
    {ele.address.city}
    </div>
    <div class="col-lg-6">
    <label className="label">State:</label>
    {ele.address.state}
    </div>
  </div>
  <div class="row">
    
    <div class="col-lg-6">
    <label className="label">Guardian Name:</label>
    {ele.guardian.name}
    </div>
    <div class="col-lg-6">
    <label className="label">Guardian number:</label>
    {ele.guardian.phonenumber}
    </div>
  </div>
  <div class="row">
    
    <div class="col-lg-6">
    <label className="label">Salary:</label>
    {ele.salary}
    </div>
    <div class="col-lg-6">
    <label className="label">Employee id:</label>
    {ele.employeeid}
    </div>
  </div>
</div>
          </>
        );
      })}
    </>
  );
}

export default Employee;
