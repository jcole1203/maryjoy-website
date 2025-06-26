import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero.jpg";
import maryjoyImage from "../assets/maryjoy.jpg";
import { ShieldCheck, GraduationCap, PiggyBank, Wallet } from "lucide-react";
import Navbar from "../components/Navbar";
import FadeInSection from "../components/FadeInSection";

const services = [
  { icon: <ShieldCheck className="text-purple-600 w-6 h-6" />, title: "Life Insurance" },
  { icon: <GraduationCap className="text-purple-600 w-6 h-6" />, title: "Education Fund Planning" },
  { icon: <PiggyBank className="text-purple-600 w-6 h-6" />, title: "Investment-linked Products" },
  { icon: <Wallet className="text-purple-600 w-6 h-6" />, title: "Retirement Planning" },
];

export default function Home() {
  return (
    <>
      <Navbar />
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-gray-800 font-sans"
    >
      
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] bg-cover bg-center flex items-center justify-center text-center px-6" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black/50 p-10 rounded-3xl text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Future with Mary Joy Calangi</h1>
          <p className="text-lg md:text-xl mb-6">Unit Manager, Skyeline Summit Life Insurance Agency<br />Pru Life UK Licensed Financial Advisor</p>
          <Link to="/contact">
            <Button className="px-6 py-3 text-lg rounded-full">Book a Free Consultation</Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <FadeInSection>
      <section className="relative bg-gradient-to-br from-purple-100 to-pink-50 py-20 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <img src={maryjoyImage} alt="Mary Joy Calangi" className="w-40 h-40 mx-auto rounded-full mb-6 object-cover" />
          <h2 className="text-3xl font-semibold mb-4">Meet Mary Joy Calangi</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Mary Joy Calangi is a trusted Unit Manager from Skyeline Summit Life Insurance Agency, proudly affiliated with Pru Life UK — the leading life insurance company in the Philippines. Her passion for helping individuals and families achieve financial security is rooted in years of experience and dedication.
          </p>
          <p className="text-lg leading-relaxed">
            She offers professional advice tailored to your personal goals, with services focused on life insurance, investment-linked protection plans, and financial education.
          </p>
        </div>
      </section>
      </FadeInSection>

      {/* Financial Guidance */}
      <FadeInSection>
      <section className="relative py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Financial Guidance</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Link to="/why-financial-advisor">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white/80 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow cursor-pointer text-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-3">Why Work with a Financial Advisor?</h3>
              <p className="text-lg">
                Professional guidance can help you make smarter decisions about savings, insurance, and investments.
                Mary Joy ensures you feel confident and supported every step of the way.
              </p>
            </motion.div>
          </Link>
          <Link to="/services">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white/80 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow cursor-pointer text-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-3">Explore Our Services</h3>
              <p className="text-lg">
                From life insurance to investment-linked plans, discover options that match your needs and priorities. Secure your future today.
              </p>
            </motion.div>
          </Link>
        </div>
      </section>
      </FadeInSection>

       {/* 🧩 Services Section */}
       <FadeInSection>
       <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How I Can Help</h2>
          <p className="text-gray-600 mb-12">
            Tailored financial solutions for every stage of life.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
                <div className="flex justify-center mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>
    </motion.main>
    </>
  );
}
