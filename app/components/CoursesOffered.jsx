import React from 'react';
import './CoursesOffered.css';

const courses = [
  {
    title: 'Fullstack Web Development',
    price: 'R2875.00',
    features: [
      'Live class + recorded video',
      'Access to recorded video',
      'Course duration: 9 months',
      'Total price includes 15% VAT',
      'EFT Bank Transfer',
    ],
  },
  {
    title: 'Frontend Web Development',
    price: 'R1725.00',
    features: [
      'Live class + recorded video',
      'Access to recorded video',
      'Course duration: 6 months',
      'Total price includes 15% VAT',
      'EFT Bank Transfer',
    ],
  },
  {
    title: 'Fullstack Web Development (Recorded Only)',
    price: 'R1725.00',
    features: [
      'Access to recorded video only',
      'Course duration: 9 months',
      'Total price includes 15% VAT',
      'EFT Bank Transfer',
    ],
  },
];

const CoursesOffered = () => {
  return (
    <div className="courses-section">
      <div className="courses-container">
        <h2 className='text-2xl  text-black font-mono'>Courses Offered</h2>
        <p className='text-xl  text-black font-mono'>Duration of course: 9 months - 1 hour class (Mon-Fri), Time: 3:30 PM to 4:30 PM (SAST)</p>
        <div className="cards-container">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p className="price">{course.price}</p>
              <ul  className='text-black'>
                {course.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon">&#10003;</span> {/* Check icon */}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesOffered;
