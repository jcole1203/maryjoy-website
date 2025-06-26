import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./Pages/HomePage";
import WhyFinancialAdvisor from "./Pages/WhyFinancialAdvisor";
import Achievements from "./Pages/Achievements";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/Services";
import ThankYouPage from "./Pages/ThankYouPage";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-financial-advisor" element={<WhyFinancialAdvisor />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />

        </Routes>
      </AnimatePresence>
    </>
  );
}
