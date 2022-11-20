import { createContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
   
    const [name,setname]=useState([])
    
    
    return (
      <UserContext.Provider value={{ name,setname}}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;