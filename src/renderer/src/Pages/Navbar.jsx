import React, { useState } from 'react'
import '../css/Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBell } from 'react-icons/fa6'
import { IoExit } from 'react-icons/io5'
import logoPcn from '../assets/LogoPcn.png'
const Navbar = () => {
  const [isSelect, setIsSelect] = useState(false)
  const navigate = useNavigate()

  const HandleClick = (val) => {
    console.log('cek ', val)
  }

  return (
    <>
      <div className="containerNav">
        <div className="nav1">
          <div className="navLogo">
            <img className="logo" src={logoPcn} alt="" />
          </div>
          <div className="containerNav2">
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/analytics">
                Analytics
              </NavLink>
            </nav>
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/">
                Definition
              </NavLink>
            </nav>
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/dashboard">
                Dashboard
              </NavLink>
            </nav>
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/analyticSetting">
                Analytic Setting
              </NavLink>
            </nav>
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/diagnostics">
                Diagnostics
              </NavLink>
            </nav>
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/interfaces">
                Interfaces
              </NavLink>
            </nav>
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/storage">
                Storage
              </NavLink>
            </nav>
            <nav id="sidebar">
              <NavLink className="navlinkStyle" to="/settings">
                Settings
              </NavLink>
            </nav>
          </div>
        </div>

        <div className="containerNav3">
          <FaBell size="25px" color="white" />

          <IoExit size="25px" color="white" />
        </div>
      </div>
    </>
  )
}

export default Navbar
