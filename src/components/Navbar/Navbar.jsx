import React, { useState } from 'react'
import menuImg from "../../assets/Images/menu.png"
import "./Navbar.css"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
    <div className="flex">
    <h1 className="title" id='home'>Damilare</h1>
    <div className="menu" onClick={()=> {
        setMenuOpen(!menuOpen)
    }}>
        <img src={menuImg} alt="" />
    </div>
    </div>
    <ul className={menuOpen ? "open" : ""}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
  )
}

export default Navbar