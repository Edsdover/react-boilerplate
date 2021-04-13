import React from "react"
import { Link } from 'react-router-dom';

import "../css/header.css";

const Header = () => {

  const headerStyle = {
    display: "flex",
    background: "#ededed",
    padding: "20px 0",
    lineHeight: "1.5em",
    height: "100px",
  }
  // Just doing different stlye methods here, however I prefer to make a new file when needed.
  return (
    <div>
      <header className='header' style={headerStyle}>
        <Link className='homeLink' to='/home'><img className='homeLinkImg' alt='Home' src=''></img></Link>
        <h1 style={{ fontSize: "2rem", fontWeight: "600", lineHeight: "1em", color: "#777777", textAlign: "center" }}>React Boilerplate</h1>
        <Link className='profileLink' to='/profile'>Welcome</Link>
      </header>
    </div>
  )
}

export default Header