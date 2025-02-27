import React, { useState } from "react";

// Testimonials Data
const testimonialsData = [
  {
    name: "John Smith",
    company: "WarehouseX",
    feedback: "WEIGHTS has completely changed how we track inventory. No more overstocking or shortages!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Johnson",
    company: "RetailPro",
    feedback: "The real-time monitoring is a game changer. We always know our stock levels instantly!",
    avatar: "https://invalid-url-to-test.com", // This URL is broken to test fallback
  },
];

const Testimonials = () => {
  const [avatars, setAvatars] = useState(testimonialsData.map(t => t.avatar));

  const handleImageError = (index) => {
    const newAvatars = [...avatars];
    newAvatars[index] = "https://placehold.co/100x100?text=No+Image";
    setAvatars(newAvatars);
  };

  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
      <p className="text-lg text-gray-600 mt-4">See how WEIGHTS is transforming inventory management.</p>

      <div className="mt-10 max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            {/* User Avatar with Fallback */}
            <img
              src={avatars[index]}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full"
              onError={() => handleImageError(index)}
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.company}</p>
            <p className="mt-2 text-gray-600">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
