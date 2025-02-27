import React from "react";

// Feature Data
const features = [
  {
    title: "Real-Time Inventory Tracking",
    description: "Monitor stock levels instantly with our ESP32-powered system, ensuring accuracy and reducing waste.",
    icon: "📦",
  },
  {
    title: "Remote Monitoring",
    description: "Access live inventory data from anywhere via our web app, keeping you informed 24/7.",
    icon: "🌍",
  },
  {
    title: "Smart Alerts & Notifications",
    description: "Get notified when stock runs low or reaches critical levels to avoid shortages.",
    icon: "🔔",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
        <p className="text-lg text-gray-600 mt-4">Discover how our IoT-powered system keeps your inventory in check.</p>

        {/* Feature Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
