import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Pages
import FeaturesPage from "./pages/FeaturesPage";
import AboutUsPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Footer />
          </>
        } />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default App;
