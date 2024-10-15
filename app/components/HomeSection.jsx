import Image from 'next/image';
import './HomeSection.css'; // Regular CSS import

export default function HomeSection() {
  return (
    <div className="container">
      <div className="imageContainer">
        <Image src="/mernstack.gif" alt="Coaching" width={500} height={500} />
      </div>
      <div className="textContainer">
        <h1 className="title">From <span className='text-green-600 font-bold'>Beginner </span>to <span className='text-green-600 font-bold'>Pro</span><br></br></h1>

        <h2 className="subtitle">
          <span className='text-green-600 font-bold'>Master</span> THE <span className='text-green-900 font-bold'>MERN STACK</span>
        </h2>
        <p className="description">Join our upcoming session on MERN Stack, designed for <span className='text-green-700'>aspiring developers</span> who want to excel in the tech industry.</p>
        <p className="flexibility">
          Our learning is <span className='text-green-600'>flexible</span>, offering a blend of live online classes and pre-recorded videos. Stay on track with the latest industry demands and be <span className='text-green-600'>job-ready in just 9 months</span>, armed with an impressive portfolio, all from the comfort of your home.
        </p>
        <p className="benefits">
         <span className='text-green-600 text-3xl font-bold'>Why Choose Us?</span> <br></br>
          <span className='text-green-600 text-xl font-bold'>Expert Instructors</span><br></br> Learn from seasoned professionals with years of experience in the field. <br></br>
           <span className='text-green-600 text-xl font-bold'>Comprehensive Curriculum</span><br></br> Cover all essential aspects of the MERN stack, including <span className='text-green-700'>MongoDB, Express, React, and Node.js.</span> <br></br>
         <span className='text-green-600 text-xl font-bold'> Hands-On Projects</span> <br></br>Build <span className='text-green-600'>real-world applications</span> to showcase in your portfolio. <br></br>
          <span className='text-green-600 text-xl font-bold'>Career Support</span><br></br> Get guidance on <span className='text-green-600'>job applications</span>, interviews, and networking in the tech community. <br></br>
        </p>
        <a className="link" href="#faq">Visit the FAQ page for the most commonly asked questions</a>
      </div>
    </div>
  );
}
