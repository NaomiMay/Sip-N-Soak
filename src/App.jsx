import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./index.css";
import Navigation from "./components/Navigation/Nav";
import AccessibilityMenu from "./components/Accessibility-menu/Accessibility-menu";
import { useAccessibility } from "./components/Accessibility-menu/AccessibilityContextFile";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ingredients from "./pages/Ingredients";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  const { fontSize, cursorSize, dyslexicFont, highContrast } =
    useAccessibility();

  useEffect(() => {
    console.log("Current font size:", fontSize);
    document.body.style.setProperty("font-size", `${fontSize}px`, "important");

    document.querySelectorAll("h2").forEach((h2) => {
      h2.style.setProperty("font-size", `${fontSize + 4}px`, "important");
    });

    if (highContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
    if (cursorSize) {
      document.body.classList.add("cursor-size");
    } else {
      document.body.classList.remove("cursor-size");
    }
    if (dyslexicFont) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
  }, [fontSize, highContrast, cursorSize, dyslexicFont]);

  return (
    <BrowserRouter>
      <Navigation />
      <AccessibilityMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
