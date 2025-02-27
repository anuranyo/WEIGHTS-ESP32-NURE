import React from "react";

const benefits = [
  { title: "Accurate Stock Data", description: "Get real-time insights into your inventory levels with IoT-powered monitoring." },
  { title: "Reduce Losses", description: "Avoid overstocking and stockouts with predictive inventory alerts." },
  { title: "Seamless Integration", description: "Connect with your existing inventory system effortlessly." },
];

const Benefits = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Why Choose WEIGHTS?</h2>
      <p className="text-lg text-gray-600 mt-4">Smart inventory tracking made easy.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
            <p className="mt-2 text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
