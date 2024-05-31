import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/Navbar.css";

const Navbar = () => {
  useEffect(()=>{
    const paths=document.querySelectorAll('.web-dev path')
    paths.forEach((e,i)=>{
      console.log(`${i} width: ${e.getTotalLength()}`);
    })
  },[])
  const expandMenu= () =>{
    const listItem = document.querySelectorAll('.list-item')
    console.log(listItem[0].style.display);
    if (!listItem[0].style.display){
      listItem.forEach((e)=>{e.style.display="block"})
    } else {
      listItem.forEach((e)=>{e.style.display=null});
    }
  }
  return (
    <header>
      <nav className="navbar">
          <li className="my-name"> Neelansh Sharma </li>
          <li className="list-item"><a href="#info-container">About</a></li>
          <li className="list-item"><a href="#projects">Projects</a></li>
          <li className="contact list-item">
            <a href="#Socials">Get in Touch</a>
          </li>
          <li className="expand"><button onClick={expandMenu}><FontAwesomeIcon icon="fa-solid fa-bars" /></button></li>
      </nav>
  </header>
  );
};

export default Navbar;
