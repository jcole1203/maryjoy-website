import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await res.json();
      if (res.ok) {
        alert("Email sent!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        window.location.href = "/thank-you"; // Redirect
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Email could not be sent.");
    }
  };

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-20 px-6 md:px-16 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen"
      >
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
            Let's Get in Touch!
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Whether you have a question, need help choosing a plan, or just want to chat about your future, I'm here for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Optional: Business Info */}
          <div className="mt-12 text-center text-gray-600 text-sm">
            <p>📍 Based in the Philippines · Online consultations available</p>
            <p>🕒 Mon–Sat · 9:00 AM – 6:00 PM</p>
            <p className="mt-1">✉️ Email: mjcalangi@gmail.com</p>
          </div>
        </div>
      </motion.main>
    </>
  );
}
