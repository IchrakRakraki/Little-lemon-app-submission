import React from "react"
import Logo from "./assets/Logo.svg"
import HambergerIcon from "./assets/hamburger_menu.svg"
import BasketIcon from "./assets/basket.svg"

const Nav = () => {
    return (
        <nav>
            <img src={HambergerIcon} className="mobileIcon" alt="Hamberger menu icon."/>
            <img src={Logo} alt="Little Lemon restautant logo."/>
            <img src={BasketIcon} className="mobileIcon" alt="Hamberger menu icon."/>

            <ul className="navLinks">
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