import "./FooterStyles.css"

import React from 'react'
import{FaHome,FaPhone, FaMailBulk, FaGithub, FaLinkedin}from"react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>
                        123 Electronic City.
                    </p>
                    <p>Bangalore</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            8249284561</h4>
            
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            santunupadhy2@gmail.com</h4>
            
            </div>
        </div>

        <div className="right">
            <h4>About Me</h4>
            <p>Technically sophisticated with adequately self experience in the area of software development.</p>
            <div className="social">
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            
            </div>
        </div>
        
    </div>
      
    </div>
  )
}

export default Footer
