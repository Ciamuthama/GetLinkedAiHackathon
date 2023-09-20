// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <div>
        <p className="getlinked">
          get<span className="linked">linked</span>
        </p>
      </div>
      <div className="main_nav">
        <h2>Timeline</h2>
        <h2>Overview</h2>
        <h2>FAQs</h2>
        <h2>Contact</h2>
        <button className='button_nav'>
          <h2>Register</h2>
        </button>
      </div>
    </div>
  );
}
