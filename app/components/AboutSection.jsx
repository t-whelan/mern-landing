import React from 'react';
import './AboutSection.css'; 
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className='text-xl' id='about'>About Our E-Learning Platform</h2>
        <p className='text-xl text-black'>
          Welcome to our e-learning platform on <a href="https://e5code.com" target="_blank" rel="noopener noreferrer">e5code.com</a>, dedicated to teaching the MERN stack (MongoDB, Express, React, Node.js). We provide comprehensive resources for aspiring developers to build robust web applications. For more information about payment and courses, please email: <span className='font-bold text-green-700'>info@velisaafrica.co.za</span>
        </p>
        <p className='text-xl text-black'>
          Our classes are led by a senior developer online and pre-recorded, who graduated from the prestigious, internationally renowned Microverse.
        </p>
        
        <div className="prerequisites-container">
          <h3 className='text-2xl'>Prerequisites</h3>
          <p className='font-bold text-blue-950 text-xl'>What we&apos;re Looking for</p>
          <ul className='text-lg font-sans'> 
            <li className='text-black'><span className="check-icon">&#10003;</span> Eagerness to learn and grow</li>
            <li className='text-black'><span className="check-icon">&#10003;</span> Self-discipline and motivation</li>
            <li className='text-black'><span className="check-icon">&#10003;</span> A reliable laptop and internet connection</li>
            <li className='text-black'><span className="check-icon">&#10003;</span> Basic programming knowledge in HTML and CSS</li>
            <li className='text-black'><span className="check-icon">&#10003;</span> Foundational knowledge of JavaScript</li>
            <li className='text-black'><span className="check-icon">&#10003;</span> Familiarity with version control systems like Git is a plus</li>
          </ul>
        </div>
      </div>
      <Image src="/computer.gif" alt="Computer animation" className="about-image" width={500} height={500} />
    </div>
  );
}

export default AboutSection;
