// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className='navigation'>
          <div>
              <p className="getlinked">get<span className="linked">linked</span></p>
      </div>
      <ul className="unorderlist">
        <li>Timeline</li>
        <li>Overview</li>
        <li>FAQs</li>
        <li>Contact</li>
          </ul>
          <button className="containerRegister">
              <p className='register'>Register</p>
          </button>
    </div>
  );
}
