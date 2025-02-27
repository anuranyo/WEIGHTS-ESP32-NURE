import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  { name: "Basic", price: "$9.99", features: ["Basic 2-weights Inventory Tracking", "24/7 Support"] },
  { name: "Pro", price: "$19.99", features: ["Advanced 4-weights Tracking", "Priority Support", "Free Equipment Installation"] },
  { name: "Enterprise", price: "Custom", features: ["Custom Weights Inventory Tracking", "Priority Support", "Free Installation and Maintenance of Equipment"] },
];

const Header = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-100">
      <motion.h2 className="text-4xl font-bold text-gray-900" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Pricing Plans</motion.h2>
      <motion.p className="text-lg text-gray-600 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Choose the right plan for your business.</motion.p>

      <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center ${plan.name === "Pro" ? "border-4 border-blue-500 scale-105" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
            <p className="text-3xl text-blue-600 font-bold mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => <li key={i}>✅ {feature}</li>)}
            </ul>
            <motion.a
              href="#get-started"
              className="block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-transform transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Get Started</motion.a>
          </motion.div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <motion.div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        <h2 className="text-3xl font-bold text-gray-900 text-center">Feature Comparison</h2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-6 py-3">Feature</th>
                <th className="border border-gray-300 px-6 py-3">Basic</th>
                <th className="border border-gray-300 px-6 py-3 text-blue-600 font-bold">Pro</th>
                <th className="border border-gray-300 px-6 py-3">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-6 py-3">Inventory Tracking</td>
                <td className="border border-gray-300 px-6 py-3">2-Weights</td>
                <td className="border border-gray-300 px-6 py-3 text-blue-600 font-bold">4-Weights</td>
                <td className="border border-gray-300 px-6 py-3">Custom</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-3">Support</td>
                <td className="border border-gray-300 px-6 py-3">24/7</td>
                <td className="border border-gray-300 px-6 py-3 text-blue-600 font-bold">Priority</td>
                <td className="border border-gray-300 px-6 py-3">VIP</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-3">Installation</td>
                <td className="border border-gray-300 px-6 py-3">Self-Setup</td>
                <td className="border border-gray-300 px-6 py-3 text-blue-600 font-bold">Free</td>
                <td className="border border-gray-300 px-6 py-3">Free + Maintenance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Support Information */}
      <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
        <h2 className="text-3xl font-bold text-gray-900">Need Help Choosing a Plan?</h2>
        <p className="text-lg text-gray-600 mt-4">Contact our support team to find the best solution for your business.</p>
        <Link to="/contact" className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all transform hover:scale-110">
          Contact Support
        </Link>
      </motion.div>
    </section>
  );
};

export default Header;