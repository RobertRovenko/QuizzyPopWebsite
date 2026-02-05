// src/App.js - React Router v6.4+
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./App.css";
import Attributions from "./components/Attributions"; // Add this
import TermsOfService from "./components/TermsOfService";
import CookiePolicy from "./components/CookiePolicy";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/attributions"
            element={
              <>
                <Header />
                <Attributions />
                <Footer />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Header />
                <TermsOfService />
                <Footer />
              </>
            }
          />
          <Route
            path="/cookies"
            element={
              <>
                <Header />
                <CookiePolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Header />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Header />
                <Pricing />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Separate component to handle scroll
function ScrollHandler() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
