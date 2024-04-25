// import React from 'react'
import NavBarLogo from "../../../assets/navbar_logo";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar desktop_container">
      <NavBarLogo />
      <div className="navbar_items">
        <a href="#" className="nav_item body_sm_medium">About</a>
        <a href="#" className="nav_item body_sm_medium">Services</a>
        <a href="#" className="nav_item body_sm_medium">Our Work</a>
        <button className="navbar_button body_xs_semibold">
          CONTACT US
          <img src="src/assets/contact_us_arrow.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar;