import React from "react"
import './Navbar.css'
import selfPhoto from './assets/Photo1.jpg'
import { Outlet, Link } from "react-router-dom"

const NavBar = () => {
    return (
      <>
        <nav>
        <ul>
          <li><Link to="/">Alexander Lewis</Link></li>
          <li><Link to="/AboutMe">About Me</Link></li>
          <li><Link to='/Education_Skills'>Education</Link></li>
          <li><Link to='/Projects'>Projects</Link></li>
        </ul>
      </nav>

      <Outlet />
      </>
    )
  }

export default NavBar

//<img src={selfPhoto} />