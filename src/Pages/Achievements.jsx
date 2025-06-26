import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";


export default function AchievementsPage() {
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
      {/* Page Title */}
      <FadeInSection>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Achievements & Milestones</h1>
        <p className="text-lg text-gray-600">
          A journey of excellence, leadership, and impact in the financial industry.
        </p>
      </div>
      </FadeInSection>
      {/* Timeline Section */}
      <FadeInSection>
      <div className="max-w-4xl mx-auto space-y-8 border-l-4 border-purple-200 pl-10 mb-16 relative">

        {[
          { year: "2018", title: "Licensed as Financial Advisor" },
          { year: "2019", title: "Promoted to Unit Manager" },
          { year: "2021", title: "MDRT Qualifier" },
          { year: "2023", title: "Top Recruiter – Alexandrite 2" },
        ].map((item, idx) => (
          <div key={idx} className="relative pl-4">
  <div className="absolute -left-6 top-2 w-4 h-4 bg-purple-500 rounded-full"></div>
  <h3 className="text-xl font-semibold">{item.year}</h3>
  <p className="text-gray-700">{item.title}</p>
</div>
        ))}
      </div>
      </FadeInSection>
      {/* Highlight Stats */}
      <FadeInSection>
      <div className="grid md:grid-cols-3 gap-6 text-center mb-16">
        {[
          { label: "Clients Served", value: "100+" },
          { label: "Years of Experience", value: "5+" },
          { label: "Advisers Mentored", value: "20+" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-purple-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-4xl font-bold text-purple-600">{stat.value}</p>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
      </FadeInSection>
      {/* Certificates Section */}
      <FadeInSection>
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Recognitions & Certificates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["/certs/mdrt.jpg", "/certs/top-recruiter.jpg", "/certs/leadership.jpg"].map(
            (src, i) => (
              <img
                key={i}
                src={src}
                alt="Certificate"
                className="rounded-xl shadow-md hover:shadow-lg transition"
              />
            )
          )}
        </div>
      </div>
      </FadeInSection>
      {/* Testimonials */}
      <FadeInSection>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-6">What Others Say</h2>
        <blockquote className="italic text-lg text-gray-700 border-l-4 border-purple-400 pl-4">
          “Mary Joy’s passion for helping others is unmatched. I was able to secure my family’s
          future because of her.”
          <br />
          <span className="block mt-2 font-semibold text-purple-600">— Cielo Grace Crusem</span>
        </blockquote>
      </div>
      </FadeInSection>
      {/* Call to Action */}
      <FadeInSection>
      <div className="text-center mt-10">
        <p className="text-lg mb-4">Want to see how Mary Joy can help you too?</p>
        <Link
  to="/contact"
  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition inline-block"
>
  Book a Free Consultation
</Link>
      </div>
      </FadeInSection>
    </motion.main>
    </>
  );
}
