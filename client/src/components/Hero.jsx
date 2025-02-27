import React, { useState } from "react";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("/images/hero-image.png");

  return (
    <section className="bg-gray-100 text-center py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Smart Inventory Management with <span className="text-blue-600">WEIGHTS</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-700">
          Track your inventory in real-time with our ESP32-powered solution. Know your stock levels instantly and avoid shortages.
        </p>

        {/* Hero Image with Fallback */}
        <div className="mt-10">
          <img
            src={imageSrc}
            alt="Live Inventory Monitoring"
            className="w-full max-w-lg mx-auto shadow-lg rounded-lg"
            onError={() => setImageSrc("https://placehold.co/600x400?text=No+Image+Uploaded")}
          />
        </div>

        {/* CTA Button */}
        <a
          href="#get-started"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Get Started
        </a>

      </div>
    </section>
  );
};

export default Hero;
