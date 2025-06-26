import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-purple-50 px-6 py-20 text-center"
      >
        <div className="bg-white shadow-lg rounded-3xl p-10 max-w-xl">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">Thank You!</h1>
          <p className="text-gray-700 mb-6">
            Your message has been sent successfully. I’ll get back to you as soon as I can—usually within 24 to 48 hours.
          </p>
          <a
            href="/"
            className="inline-block mt-4 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Back to Home
          </a>
        </div>
      </motion.main>
    </>
  );
}
