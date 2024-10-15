"use client";
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; 
const faqData = [
  {
    question: "How do I apply?",
    answer: (
      <span>
        To apply, visit our website <a href="https://e5code.com/#how-to-apply" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">e5code.com</a> and fill out the application form. We’ll get back to you shortly with the next steps.
      </span>
    )
  },
  {
    question: "What is a full-stack software developer?",
    answer: "A full-stack software developer is someone who is proficient in both front-end and back-end development, allowing them to build complete web applications."
  },
  {
    question: "What language is the bootcamp taught in?",
    answer: "The bootcamp is taught in English. All the documentation is in English, so all students must have a good level of understanding of written English."
  },
  {
    question: "Can I join the Web Development course without a technical background?",
    answer: "Yes, our course is designed for beginners, and no prior technical experience is required."
  },
  {
    question: "How can I prepare for a full-stack web development bootcamp?",
    answer: "Familiarize yourself with basic HTML, CSS, and JavaScript. It’s also beneficial to have a good internet connection and a willingness to learn."
  },
  {
    question: "Duration of the Course",
    answer: "The full-stack web development course lasts for 9 months, with classes held regularly."
  },
  {
    question: "How much does the full-stack web development course cost for Full Access (Live Class + Recordings) over 9 months?",
    answer: "The Full Access tuition fee is R2500.00 + 15% VAT - (Total: R2875.00), which includes live classes and recordings over 9 months."
  },
  {
    question: "How much does access to the full-stack web development pre-recorded classes cost?",
    answer: "The pre-recorded video access costs R1500.00 + 15% VAT - (Total: R1725.00)."
  },
  {
    question: "How much does the frontend web development course cost over 6 months?",
    answer: "The frontend web development tuition fee is R1500.00 + 15% VAT (Total: R1725.00)."
  },
  {
    question: "Is there any extra support for students who subscribe to pre-recorded classes?",
    answer: "Yes, students who subscribe to pre-recorded classes have access to our online support community."
  },
  {
    question: "Success Rule",
    answer: "To achieve your goal of becoming a full-stack web developer after completing the course, practice consistently and seek feedback."
  },
  {
    question: "Course Completion Certificate",
    answer: "Upon completing the course, students will receive a certificate recognizing their achievement."
  },
  {
    question: "Good Internet Connection",
    answer: "A good internet connection is essential for attending live classes."
  },
  {
    question: "Any additional support to prepare you for a job search?",
    answer: "Yes, we provide job search workshops, resume reviews, and interview preparation."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-2xl mx-auto p-6 bg-green-50 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Bootcamp FAQ</h1>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border rounded-lg border-gray-300">
          <div 
            className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-200 ease-in-out ${openIndex === index ? 'bg-green-200' : 'bg-gray-100'}`} 
            onClick={() => toggleAnswer(index)}
          >
            <span className="font-semibold">{item.question}</span>
            <FiChevronDown className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
          </div>
          {openIndex === index && (
            <div className="p-4 bg-green-100 rounded-b-lg text-gray-800">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
