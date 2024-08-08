import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className="bio-service">BIO SERVICE </h3>
            <p>We at BIO SERVICE established this company with one vision in mind</p>
          </div>

          <div className="footer-social">
            <h3 className="bio-service">Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebook className="icons" style={{ color: '#1877F2' }} />
              </div>

              <div>
                <FaInstagram className="icons" style={{ color: '#833AB4' }} />
              </div>
              <div>
                <FaTwitter className="icons" style={{ color: '#1DA1F2' }} />
              </div>
              <div>
                <a href="https://wa.me/918779013932?text=hello how can i help you ?" target="_blank">
                  <FaWhatsapp className="icons" style={{ color: 'green' }} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3 className="bio-service">Contact Us:</h3>
            <h3>
              <a href="tel:+91 8779013932">+91 8779013932</a>
            </h3>
            <h3>
              <a href="mailto:bioservice15@gmail.com">
                bioservice15@gmail.com
              </a>
            </h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <div className="container grid grid-two-column">
            <div className="term">
              <Button
                component={Link}
                to="/privacy-policy"
                variant="outlined"
                sx={{
                  borderColor: "#00BF62",
                  color: "#ffffff", // Set text color to white
                  fontSize: '1rem', // Increased font size
                  padding: '8px 16px', // Increased padding
                  minWidth: '120px', // Increased min width
                  height: '40px', // Increased height
                  borderRadius: '8px', // Optional: rounded corners
                  backgroundColor: "#00BF62", // Background color
                  '&:hover': {
                    borderColor: "#00BF62",
                    color: "#ffffff", // Maintain white text on hover
                    backgroundColor: "#009C50", // Lighter green on hover
                    opacity: 0.9
                  },
                  '&:active': {
                    opacity: 0.8
                  }
                }}
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
