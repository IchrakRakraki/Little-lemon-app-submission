import React from "react"
import LargeLogo from "./assets/LargeLogo.png"

const Footer = () => {
    return (
        <footer>
            <img src={LargeLogo} alt="Little Lemon restaurant logo" />
            <div className="footerCategory">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
            <div className="footerCategory">
                <h3>Contact</h3>
                <ul>
                    <li><a href="#google-maps">Adress</a></li>
                    <li><a href="#call">Phone Number</a></li>
                    <li><a href="#email">Email</a></li>
                </ul>
            </div>
            <div className="footerCategory">
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="#google-maps">Tiktok</a></li>
                    <li><a href="#call">Instagram</a></li>
                    <li><a href="#email">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer