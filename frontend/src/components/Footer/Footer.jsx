import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo_2} alt="" />
                <p>Greenfor  is a company dedicated to the well-being of families and the protection of the environment.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.intagram_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Sustainability</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+52-312-125-4789</li>
                    <li>contact@greenfor.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">© 2024 GreenFor. All rights reserved. Committed to sustainability and the well-being of our planet.</p>
    </div>
  )
}

export default Footer