import React from "react";

const plans = [
  { name: "Basic", price: "$9.99", features: ["Basic 2-weights Inventory Tracking", "24/7 Support"] },
  { name: "Pro", price: "$19.99", features: ["Advanced 4-weights Tracking", "Priority Support", "Free Equipment Installation"] },
  { name: "Enterprise", price: "Custom", features: ["Custom Weights Inventory Tracking", "Priority Support", "Free Installation and Maintenance of Equipment"] },
];

const Pricing = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-900">Pricing Plans</h2>
      <p className="text-lg text-gray-600 mt-4">Choose the right plan for your business.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
            <p className="text-2xl text-blue-600 font-bold mt-2">{plan.price}</p>
            <ul className="mt-4 text-gray-600">
              {plan.features.map((feature, i) => <li key={i}>✔ {feature}</li>)}
            </ul>
            <a href="#get-started" className="block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
