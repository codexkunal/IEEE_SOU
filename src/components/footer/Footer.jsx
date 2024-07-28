import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Silver Oak University  <br/>IEEE Student Branch</h3>
          <p>Silver Oak University IEEE SB aims to give an interactive platform for students to develop professional and technical abilities. Since the start, it is successfully organizing various events with well-defined subjects.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p className='footer-section-para'><span className='footer-section-keys'>Phone:</span> +91 07966046304</p>
          <p className='footer-section-para'><span className='footer-section-keys'>Email:</span> <a href="mailto:ieeefbc@socet.edu.in">ieeefbc@socet.edu.in</a></p>
          <div className='footer-section-location'>
            <span className='footer-section-keys'>Location:</span>
            <p className='footer-section-para'> 352,353 A , Nr. Bhavik Publications, Opp. Bhagwat Vidyapith, S.G.Highway, Ahmedabad, Gujarat - 382481</p>
          </div>


          <div className="social-links">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>


      <div className="footer-bottom">
        <div>

          <p>© Copyright Silver Oak University IEEE SB. All Rights Reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;