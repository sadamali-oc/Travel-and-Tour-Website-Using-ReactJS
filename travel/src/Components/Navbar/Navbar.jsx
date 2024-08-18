import React,{useState} from "react";
import "./navbar.scss";
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

import { TbGridDots } from "react-icons/tb";

function Navbar() {

  const [active , setActive] =useState('navbar')
  //function to toglle nababr

  const showNav =()=>{
    setActive ('navBar activeNavbar')

  }



  return (
    <section className="navBarSection">
      <header className="header flex ">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <MdTravelExplore  className="icon"/>
              Travel.
            </h1>
          </a>
        </div>


  





        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>  
            </button>
          </ul>
          <div className="closeNavbar">
          <IoMdCloseCircle  className="icon"/>
          </div>

          <div className="toggleNavbar">
          <TbGridDots className="icon"/>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
