import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='footer-logo' src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque eius tempora dolorum, velit suscipit veniam exercitationem reprehenderit minima beatae fuga labore quaerat optio nulla possimus? Quae explicabo optio recusandae?</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>

            </div>
            <div className="footer-content-right">
                <h2>Comapany</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li> Privacy Policy</li>
                </ul>


            </div>

            <div className="footer-content-center">
                <h2>
                    Get In Touch
                </h2>
                <ul>
                    <li>+917275147891</li>
                    <li>Deep@gmail.com</li>
                    <li>MDA Colony, Ram Ganga Vihar Phase 2, Moradabad, Uttar Pradesh 244001</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright © 2024 Deep.com. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
