import React from "react";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Prize from "./components/Prize";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Cta />
      <ContactUs />
      <Prize />
      <Footer />
    </div>
  );
}

export default App;
