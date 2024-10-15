import React from 'react';
import './Footer.css'; // Ensure you have the CSS file imported
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import phone and envelope icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image src="/velisa.jpg" alt="Velisa Africa" className="logo" width={50} height={50} />
        </div>
        
        {/* Contact Us Heading */}
        <h2 className="contact-heading text-xl font-mono">Contact Us</h2>
        
        <div className="footer-icons">
          <a href="https://www.facebook.com/VelisaAfrica/" aria-label="Facebook" className="icon facebook">Facebook</a>
          <a href="https://x.com/VelisaAfrica" aria-label="Twitter" className="icon twitter">Twitter</a>
          <a href="http://www.linkedin.com/company/velisa-africa-academy" aria-label="LinkedIn" className="icon linkedin">LinkedIn</a>
        </div>

        {/* Contact Information with Icons */}
        <div className="footer-info">
          <p id='contact' className='text-md'>
         
           📞 Contact us: 0861 716 150 or 083 2525 680 <br></br>
           
            ✉️info@velisaafrica.co.za
          </p>
          <p className='font-mono'>© 2024 Velisa Africa. All rights reserved.</p>
          <p>
            <a href="https://velisaafrica.co.za/privacy-policy/">Privacy Policy</a> | <a href="https://velisaafrica.co.za/academy/">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
