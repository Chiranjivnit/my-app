import React from "react";
import {NavLink} from "react-router-dom";
 const Navigation = () => {
     return(
         <div>
             <NavLink style={{padding:10}}to="/">Home</NavLink>
             <NavLink style={{padding:10}} to = "/Contact">Contact</NavLink>
             <NavLink to="/About">About</NavLink>
             
         </div>
     );
 };

  export default Navigation;