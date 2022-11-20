
import "./App.css";
import axios from "axios";
import React from "react";


import Employee from "./Employee";
import { UserProvider } from "./UserContext";

function App() {
  


  return (
    <>
   <UserProvider>
      <Employee></Employee>
      </UserProvider>
    
    </>
      
  );
}

export default App;

