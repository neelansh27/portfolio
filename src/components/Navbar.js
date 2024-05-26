import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  useEffect(()=>{
    const paths=document.querySelectorAll('.web-dev path')
    paths.forEach((e,i)=>{
      console.log(`${i} width: ${e.getTotalLength()}`);
    })
  },[])
  return (
      <nav className="navbar">
        <li className="my-name"> Neelansh </li>
        <li>About</li>
        <li>Services</li>
        <li>
          <button className="contact">Get in Touch</button>
        </li>
      </nav>
  );
};

export default Navbar;
