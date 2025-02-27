import React, { useState } from "react";
import { motion } from "framer-motion"; // Animation library
import { useInView } from "react-intersection-observer"; // Detect scroll position

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

const FeaturesPage = () => {
  const [imageSrc, setImageSrc] = useState("/images/device-diagram.png");

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
          <h1 className="text-5xl font-bold text-gray-900">
            Revolutionizing Inventory Management with <span className="font-bold">WEIGHTS</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Our ESP32-powered device provides <span className="font-bold">real-time inventory tracking</span> with <span className="font-bold">weight-based monitoring</span>.
          </p>
        </motion.div>

        {/* Device Diagram */}
        <FadeInSection>
          <div className="mt-12 text-center">
            <img
              src={imageSrc}
              alt="ESP32 Inventory System"
              className="w-full max-w-4xl mx-auto shadow-lg rounded-lg"
              onError={() => setImageSrc("https://placehold.co/800x400?text=ESP32+System")}
            />
            <p className="text-gray-600 mt-4">Our ESP32-based system with <span className="font-bold">multiple weight sensors and a display</span>.</p>
          </div>
        </FadeInSection>

        {/* Features Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <FadeInSection>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">📦 Precision Weight Tracking</h3>
              <p className="mt-2 text-gray-600">
                Our device supports <span className="font-bold">2 or 4 weight sensors</span>, ensuring accurate real-time stock measurements.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">📊 Real-Time Updates</h3>
              <p className="mt-2 text-gray-600">
                Data is continuously sent to the <span className="font-bold">dashboard</span>, giving you instant stock visibility.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">🔔 Smart Alerts</h3>
              <p className="mt-2 text-gray-600">
                Receive notifications when <span className="font-bold">stock levels are low or exceeding limits</span>.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* How It Works Section */}
        <FadeInSection>
          <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 text-center">How WEIGHTS Works</h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              Our system makes <span className="font-bold">inventory tracking effortless</span> in just three steps:
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { title: "📡 Connect Your Device", desc: "Set up the ESP32-based weight sensors in your warehouse or store." },
                { title: "📊 Track Inventory in Real-Time", desc: "View live updates on your dashboard, showing exact stock levels." },
                { title: "🔔 Get Smart Alerts", desc: "Receive instant notifications when stock levels are low or need replenishing." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Final Call to Action */}
        <FadeInSection>
          <motion.div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Start Managing Your Inventory Smarter Today!</h2>
            <p className="text-lg text-gray-600 mt-4">
              Join <span className="font-bold">hundreds of businesses</span> optimizing their stock levels with WEIGHTS.
            </p>
            <motion.a
              href="/get-started"
              className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign Up Now
            </motion.a>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesPage;
