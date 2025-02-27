import React from "react";
import { motion } from "framer-motion"; // Animation library
import { useInView } from "react-intersection-observer"; // Scroll animations

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
    return (
      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900">Who We Are</h1>
            <p className="text-lg text-gray-600 mt-4">
              At <span className="font-bold">WEIGHTS</span>, we are dedicated to revolutionizing inventory management with smart, real-time solutions.
            </p>
          </motion.div>
  
          {/* Company Mission */}
          <FadeInSection>
            <div className="mt-12 bg-white p-12 rounded-lg shadow-md text-center">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-xl text-gray-600 mt-6">
                At <span className="font-bold">WEIGHTS</span>, we strive to push the boundaries of inventory management by leveraging the latest advancements in <span className="font-bold">IoT, cloud computing, AI-driven analytics, and machine learning</span>. Our goal is to empower businesses with <span className="font-bold">precise, real-time stock monitoring</span>, reducing operational inefficiencies and eliminating costly inventory mistakes.
              </p>
              <p className="text-xl text-gray-600 mt-4">
                Our cutting-edge platform integrates <span className="font-bold">ESP32 microcontrollers</span> and <span className="font-bold">high-precision weight sensors</span>, connected seamlessly to our robust cloud infrastructure. By utilizing advanced <span className="font-bold">data analytics</span> and <span className="font-bold">predictive modeling</span>, our system provides instant insights into stock levels, consumption trends, and replenishment alerts, ensuring optimal resource allocation and maximizing profitability.
              </p>
              <p className="text-xl text-gray-600 mt-4">
                With features like <span className="font-bold">AI-powered demand forecasting</span>, <span className="font-bold">blockchain-secured inventory logs</span>, and <span className="font-bold">real-time remote monitoring</span>, we are committed to reshaping the future of warehouse and inventory management. Our system is designed to be <span className="font-bold">scalable, adaptive, and seamlessly integrable</span> into any business environment, from small-scale retailers to large-scale industrial facilities.
              </p>
            </div>
          </FadeInSection>
  
          {/* Our Team Section */}
          <FadeInSection>
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
              <p className="text-lg text-gray-600 mt-4">
                A passionate group of engineers, designers, and innovators dedicated to optimizing inventory tracking.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                {[
                  { name: "Yehor Sotnykov", role: "UX Designer" },
                  { name: "Yehor Sotnykov", role: "Lead Engineer" },
                  { name: "Yehor Sotnykov", role: "Product Manager" },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 w-64"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInSection>
  
          {/* Call to Action */}
          <FadeInSection>
            <motion.div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Join Us on Our Journey</h2>
              <p className="text-lg text-gray-600 mt-4">
                Be a part of the future of inventory management. Stay ahead with WEIGHTS.
              </p>
              <motion.a
                href="/contact"
                className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </FadeInSection>
        </div>
      </section>
    );
  };

export default AboutPage;
