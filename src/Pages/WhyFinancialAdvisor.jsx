import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeInSection from "../components/FadeInSection";

export default function WhyFinancialAdvisor() {
  return (
    <>
      <Navbar />
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800 font-sans px-6 md:px-16 py-20 max-w-6xl mx-auto"
    >

      <FadeInSection>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Why Work with a Financial Advisor?</h1>
        <p className="text-lg leading-relaxed">
          A financial advisor is more than just a planner — they’re a strategic partner who helps you map out your financial future with clarity, confidence, and intention. Whether you're saving for retirement, securing your family's future, or planning major life events, expert guidance can help you stay on course.
        </p>
      </section>
      </FadeInSection>

      <FadeInSection>
      <section className="mb-16 bg-purple-50 p-8 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Common Financial Challenges People Face</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Uncertainty about how to start saving or investing</li>
          <li>Lack of protection for unexpected life events</li>
          <li>Mounting debt or inefficient budgeting</li>
          <li>Not knowing which insurance or investment options are best</li>
          <li>No clear plan for retirement or long-term goals</li>
        </ul>
      </section>
</FadeInSection>

<FadeInSection>
      <section className="mb-16 bg-yellow-50 p-8 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">How a Financial Advisor Helps</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Personalized Planning</h3>
            <p className="text-lg">
              Advisors take time to understand your current situation and your goals — then create a custom plan to reach them.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Protection & Risk Management</h3>
            <p className="text-lg">
              They recommend the right insurance products to safeguard your income, health, and loved ones.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Smart Investments</h3>
            <p className="text-lg">
              With access to tools and insights, advisors guide you through the world of investments and help grow your wealth responsibly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
            <p className="text-lg">
              A good advisor checks in regularly to ensure your financial path stays aligned with your evolving priorities.
            </p>
          </div>
        </div>
      </section>
</FadeInSection>

<FadeInSection>
      <section className="mb-16 bg-blue-50 p-8 rounded-3xl shadow-sm text-center">
        <h2 className="text-2xl font-semibold mb-4">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl font-medium">
          <div>
            <p className="text-4xl font-bold text-purple-600">100+</p>
            <p>Families Protected</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-600">5+</p>
            <p>Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-600">50+</p>
            <p>Financial Plans Delivered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-600">20+</p>
            <p>Trainings Attended</p>
          </div>
        </div>
      </section>
</FadeInSection>

<FadeInSection>
      <section className="mb-16 p-8 rounded-3xl bg-green-50 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">Your Financial Journey with Mary Joy</h2>
        <ol className="list-decimal pl-6 space-y-3 text-lg">
          <li>Free 1-on-1 Consultation</li>
          <li>Understanding Your Goals & Needs</li>
          <li>Customized Insurance & Investment Plan</li>
          <li>Guided Enrollment Process</li>
          <li>Ongoing Support and Plan Adjustments</li>
        </ol>
      </section>
</FadeInSection>

<FadeInSection>
      <section className="mb-16 bg-white p-8 border border-gray-200 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <p className="text-lg leading-relaxed mb-4">
          Over the years, Mary Joy Calangi has helped individuals and families across different walks of life:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>A young couple built their emergency fund and secured life insurance for their newborn.</li>
          <li>An OFW returned home to retire comfortably after following a personalized investment plan.</li>
          <li>A solo parent was able to balance education savings and insurance for three children.</li>
        </ul>
      </section>
</FadeInSection>

<FadeInSection>
      <section className="text-center bg-gradient-to-br from-purple-100 to-pink-50 py-16 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Take Control of Your Financial Journey</h2>
        <p className="text-lg mb-6">
          Start with a free consultation to discover how personalized financial planning can improve your life.
        </p>
        <Link to="/contact">
          <Button className="text-lg px-6 py-3 rounded-full">Book a Free Consultation</Button>
        </Link>
      </section></FadeInSection>
    </motion.main>
    </>
  );
}
