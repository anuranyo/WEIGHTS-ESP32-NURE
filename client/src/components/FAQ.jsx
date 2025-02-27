import React from "react";
import Accordion from "./Accordion"; // Reusing the Accordion component

const faqs = [
  { question: "How does WEIGHTS work?", answer: "WEIGHTS uses ESP32 sensors to track your stock in real-time and update your inventory automatically." },
  { question: "Can I monitor inventory remotely?", answer: "Yes, our platform allows you to check stock levels from anywhere via our web dashboard." },
];

const FAQ = () => {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <div className="mt-10 max-w-4xl mx-auto">
        {faqs.map((faq, index) => <Accordion key={index} question={faq.question} answer={faq.answer} />)}
      </div>
    </section>
  );
};

export default FAQ;
