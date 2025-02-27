import React, { useState } from "react";
import { motion } from "framer-motion";

const setupInstructions = [
  { step: "1", title: "Unbox Your Device", description: "Ensure all components are included: ESP32 module, weight sensors, cables, and power adapter." },
  { step: "2", title: "Connect Sensors", description: "Attach weight sensors to the ESP32 device following the wiring diagram in the manual." },
  { step: "3", title: "Power the Device", description: "Use a 5V USB adapter or a rechargeable battery pack to power up the system." },
  { step: "4", title: "Connect to WiFi", description: "Use the mobile app to enter your WiFi credentials and establish a connection." },
  { step: "5", title: "Calibrate Sensors", description: "Use the software interface to calibrate weight sensors for accurate readings." },
  { step: "6", title: "Start Monitoring", description: "Access real-time inventory data via the cloud dashboard or mobile app." }
];

const faqData = {
  "Setup & Connection": [
    { question: "How do I connect the device to WiFi?", answer: "Use the mobile app to enter your WiFi credentials and connect automatically." },
    { question: "How do I power the device?", answer: "You can power it using a 5V USB adapter or a rechargeable battery pack." }
  ],
  "Technical Requirements": [
    { question: "What are the hardware requirements?", answer: "Requires ESP32, weight sensors, and a stable internet connection." },
    { question: "Does it support cloud integration?", answer: "Yes, data can be sent to AWS, Firebase, or your preferred cloud service." }
  ],
  "General Questions": [
    { question: "Can I use this for industrial purposes?", answer: "Yes, our solution is designed for warehouses, logistics, and retail industries." },
    { question: "How secure is my data?", answer: "Data is encrypted and follows industry security standards." }
  ]
};

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(faqData)[0]);

  return (
    <section className="py-16 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h1 className="text-4xl font-bold text-center text-gray-900" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Setup Instructions & FAQ
        </motion.h1>
        
        {/* Setup Instructions */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Device Setup Guide</h2>
          <div className="mt-6 space-y-6">
            {setupInstructions.map((step, index) => (
              <motion.div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
                <h3 className="text-xl font-semibold text-gray-800">Step {step.step}: {step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex justify-center space-x-4">
          {Object.keys(faqData).map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 text-lg rounded-lg font-semibold transition transform hover:scale-105 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border'}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          {faqData[selectedCategory].map((faq, index) => (
            <motion.div key={index} className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
