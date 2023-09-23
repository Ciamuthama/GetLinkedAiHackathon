// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router ,Route,Link } from "react-router-dom";
import {ContactPage} from './pages/contactpage'
import {RegisterPage} from './pages/Registerpage'
import "./navigation.css";


export default function Navigation() {

  const[isOpen,setIsOpen] = useState(false)

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

     <Router> <div className='main_nav'>
        <div className={`moblie ${isOpen ? 'open' : ''}`}>
          <img src='../../assets/nav_icon.svg' style={{ color: 'white' }} className='icon' onClick={handleMenu} />
        <div className="mobile_use_close">
        <img src="../../assets/close.svg" onClick={()=>setIsOpen(false)} className="close" />
        <Link><h2>Timeline</h2></Link>
       <Link> <h2>Overview</h2></Link>
        <Link><h2>FAQs</h2></Link>
       <Link to={'Contact'}> <h2>Contact</h2></Link>
        <Link to={'Register'}><button className='button_nav' >
          Register
            </button></Link>
          </div>
        </div>
      </div>
      <Route path='Contact' component={ContactPage} />
      <Route path='Register' component={RegisterPage} /></Router>
    </div>
  );
}
