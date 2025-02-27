import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} WEIGHTS. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="mr-4 hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
