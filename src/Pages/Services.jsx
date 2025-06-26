import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  PiggyBank,
  Wallet,
  Banknote,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

const services = [
  {
    icon: <ShieldCheck className="text-purple-600 w-8 h-8" />,
    title: "Life Insurance",
    description: "Protect your family's future with comprehensive coverage.",
  },
  {
    icon: <GraduationCap className="text-purple-600 w-8 h-8" />,
    title: "Education Fund Planning",
    description: "Prepare early and confidently for your child’s education.",
  },
  {
    icon: <PiggyBank className="text-purple-600 w-8 h-8" />,
    title: "Investment-linked Products",
    description: "Grow your wealth while staying protected.",
  },
  {
    icon: <Wallet className="text-purple-600 w-8 h-8" />,
    title: "Retirement Planning",
    description: "Ensure financial freedom in your golden years.",
  },
  {
    icon: <Banknote className="text-purple-600 w-8 h-8" />,
    title: "Estate Preservation",
    description: "Pass on your legacy with peace of mind.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800 font-sans px-6 md:px-16 py-20"
    >
      {/* Page Header */}
      <FadeInSection>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Financial Services</h1>
        <p className="text-lg text-gray-600">
          Solutions tailored to your goals, values, and dreams.
        </p>
      </div>
</FadeInSection>

<FadeInSection>
      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-purple-50 p-6 rounded-3xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{s.description}</p>
          </div>
        ))}
      </div>
</FadeInSection>

<FadeInSection>
      {/* CTA */}
      <div className="text-center mt-20">
        <p className="text-lg mb-4">Need help deciding the right service for you?</p>
        <Link
  to="/contact"
  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition inline-block"
>
  Book a Free Consultation
</Link>
      </div></FadeInSection>
    </motion.main>
    </>
  );
}
