// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./navigation.css";
import { useNavigate } from "react-router-dom";


export default function Navigation() {

  const[isOpen,setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="navigation">
      <div>
        <p className="getlinked">
          get<span className="linked">linked</span>
        </p>
      </div>

      <div className='main_nav'>
        <div className={`moblie ${isOpen ? 'open' : ''}`}>
          <img src='../../assets/nav_icon.svg' style={{ color: 'white' }} className='icon' onClick={handleMenu} />
      
        <img src="../../assets/close.svg" onClick={()=>setIsOpen(false)} className="close" />
        <h2>Timeline</h2>
        <h2>Overview</h2>
        <h2>FAQs</h2>
        <h2 onClick={()=> navigate('/pages/contactpage') }>Contact</h2>
        <button className='button_nav' onClick={()=> navigate('/pages/Registerpage') }>
          Register
        </button></div>
      </div>
    </div>
  );
}
