import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is ReactPrep?",
    answer: "ReactPrep is a comprehensive platform designed to help developers prepare for React.js interviews. We offer practice problems, interactive coding challenges, mock interviews, and learning resources specifically tailored to React development."
  },
  {
    question: "How will ReactPrep help me land a job?",
    answer: "Our platform offers company-specific interview questions, real-world coding challenges, and personalized feedback on your solutions. We focus on the actual skills that top companies test for, helping you build confidence and competence for your interviews."
  },
  {
    question: "Do I need prior React experience to use ReactPrep?",
    answer: "While having some basic React knowledge is helpful, we offer resources for all skill levels from beginner to advanced. Our learning paths are structured to help you progress from fundamentals to complex React concepts at your own pace."
  },
  {
    question: "How often is new content added?",
    answer: "We add new practice problems, challenges and resources weekly. Our team actively monitors industry trends and interview patterns at top tech companies to ensure our content remains current and relevant."
  },
  {
    question: "Can I track my progress?",
    answer: "Yes! Your personal dashboard tracks your progress through different topics, displays your performance metrics, and provides personalized recommendations on areas to focus on next."
  },
  {
    question: "Is there a community aspect to ReactPrep?",
    answer: "Absolutely. Our community forums allow you to connect with other developers, discuss solutions, and participate in group learning events. We also host regular webinars and Q&A sessions with industry experts."
  }
];

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="flex justify-between items-center w-full py-5 px-3 text-left focus:outline-none"
        onClick={toggle}
      >
        <span className="font-medium text-lg">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 px-3">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(128,0,255,0.5),_transparent_70%)] blur-[150px] animate-float1" />
        <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,200,255,0.35),_transparent_70%)] blur-[140px] animate-float2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Everything you need to know about ReactPrep
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="relative z-10 max-w-3xl mx-auto bg-[#0f0f1a] rounded-xl overflow-hidden border border-purple-900/30">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={idx === openIndex}
            toggle={() => toggleFAQ(idx)}
          />
        ))}
      </div>

      {/* Additional Support CTA */}
      <div className="relative z-10 text-center mt-12 max-w-2xl mx-auto">
        <p className="text-gray-400 mb-4">Still have questions? We're here to help!</p>
        <button className="bg-transparent hover:bg-purple-600 text-purple-500 hover:text-white font-semibold py-2 px-6 border border-purple-500 hover:border-transparent rounded-full transition-all duration-300">
          Contact Support
        </button>
      </div>
    </div>
  );
} 