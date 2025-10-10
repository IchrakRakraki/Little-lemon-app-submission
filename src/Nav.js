import React from "react"
import Logo from "./assets/Logo.svg"

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Little Lemon restautant logo."/>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}
export default Nav