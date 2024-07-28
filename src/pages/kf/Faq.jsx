import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './stylesFaq.css';
// import BannerImage  from './banner.svg'; 

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    {
      question: "What is IEEE?",
      answer: "IEEE, a non-profit organization, is the world’s leading professional association for the advancement of technology. The full name of the IEEE is the Institute of Electrical and Electronics Engineers."
    },
    {
      question: "Tell me about the IEEE organization in India.",
      answer: "The IEEE is geographically made up of 10 Regions and 330 Sections worldwide. India belongs to Region 10 (Asia-Pacific area) and holds IEEE India Council, which coordinates the inter-Sectional activities of the ten Sections and also to give effective representation and support for the Sections in India."
    },
    {
        question:"Why join IEEE?",
        answer:"The IEEE is connecting more than 400,000 members to the latest information and the best technical resources available. IEEE Student Membership is a unique way to gauge the benefits of IEEE membership but at reduced membership rates. As student members you get almost all the resources you need to develop your future career.",
    },
    {
        question: "What are the IEEE membership fees?",
        answer : "Full-Year Membership: $27 Half yearly rates applied to new members only. IEEE membership runs from 1 January through 31 December. The recruitment drive will ensure membership stays valid till December 2017."
    },
    {
        question: "What is the student branch Silver Oak University?",
        answer : "Silver Oak University IEEE Student Branch aims to give an interactive platform for students to develop professional and technical abilities. Since its inception, it has been successful in organizing various national and state events with well-defined goals."
    },
    {
        question: "What is SPS?",
        answer : "IEEE Signal Processing Society (SPS) is the IEEE's first society, which is the world’s premier professional society for scientists and professionals since 1948. Engineers around the world look to the Society for information on the latest developments in the signal processing field."
    },
    {
        question: "How are the benefits of becoming a volunteer?",
        answer : "You will get rewards based on your performance, which includes Appreciation letter, Certificate, Goodies and Best Associate Awards"
    },
    {
        question: "How are the benefits of becoming a volunteer?",
        answer : "You will get rewards based on your performance, which includes Appreciation letter, Certificate, Goodies and Best Associate Awards"
    },
    {
        question: "How are the benefits of becoming a volunteer?",
        answer : "You will get rewards based on your performance, which includes Appreciation letter, Certificate, Goodies and Best Associate Awards"
    },
    {
        question: "How are the benefits of becoming a volunteer?",
        answer : "You will get rewards based on your performance, which includes Appreciation letter, Certificate, Goodies and Best Associate Awards"
    },
    // Add more FAQ items here
  ];


  return (
    <div className="faq-container">
        <div className='left_heading'>Freaquently asked question</div>
      <img src="./banner.svg" alt="banner" loading='lazy' className='banner-image'/>
      <div className='right_heading'>Get our questions solved</div>
      <div className="faq-columns">
        <div className="faq-column">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="faq-column">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQList;