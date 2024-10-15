import React from 'react';
import './CourseCover.css'; // Create this CSS file for styles

const topics = {
  frontEnd: [
    'HTML', 'CSS', 'JavaScript', 'JavaScript Unit Testing', 'React', 'Tailwind CSS', 
    'Next.js', 'State Management', 'CSR, SSR, SSG', 'TypeScript', 'Authentication', 
    'Next-Auth', 'Radix UI', 'Shadcn', 'Zod', 'Data Structures and Algorithms'
  ],
  backEnd: [
    'Node.js', 'Express', 'MongoDB', 'SQL', 'PostgreSQL', 'Prisma', 
    'Serverless Backend', 'Backend Communication', 'Websocket', 
    'Messaging Queues, Pub Subs, Redis'
  ],
  devOps: [
    'Docker Basic', 'Turbo & Monorepo', 'Git & GitHub', 'Hosting', 
    'Continuous Integration and Continuous Deployment (CI/CD)', 
    'GitHub Actions, CI/CD', 'VPS Hosting', 'Docker Advanced'
  ],
};

const CourseCover = () => {
  return (
    <div className="course-cover">
      <h2 className='text-3xl font-mono'>Course Topics</h2>

      <div className="topic-section">
        <h3 className='font-sans text-xl'>FrontEnd</h3>
        <div className="bubble-container text-blue-950">
          {topics.frontEnd.map((topic, index) => (
            <div className="bubble text-blue-950" key={index}>{topic}</div>
          ))}
        </div>
      </div>

      <div className="topic-section">
        <h3 className='font-sans text-xl'>BackEnd</h3>
        <div className="bubble-container text-blue-950">
          {topics.backEnd.map((topic, index) => (
            <div className="bubble" key={index}>{topic}</div>
          ))}
        </div>
      </div>

      <div className="topic-section">
        <h3 className='font-sans text-xl'>DevOps</h3>
        <div className="bubble-container text-blue-950">
          {topics.devOps.map((topic, index) => (
            <div className="bubble" key={index}>{topic}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCover;
