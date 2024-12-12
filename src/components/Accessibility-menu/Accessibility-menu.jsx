import React, { useState } from "react";
import { useAccessibility } from "./AccessibilityContextFile";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversalAccess,
  faFont,
  faArrowPointer,
  faWandSparkles,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import "./Accessibility-menu.css";

export default function AccessibilityMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false); //setting value of state to false for open/close

  const toggleMenu = () => {
    //function fro toggling state
    setMenuIsOpen(!menuIsOpen); //toggles between true and false
  };

  //accessability settings from the custom hook that was made
  const {
    fontSize, //current settings and the toggle functions for each
    toggleFontSize,
    cursorSize,
    biggerCursor,
    dyslexicFont,
    toggleDyslexicFont,
    highContrast,
    toggleHighContrast,
  } = useAccessibility(); //using the accessibility settings from the context doc

  return (
    <div className="acc-container">
      <main>
        <button
          className={`accBtn ${menuIsOpen ? "is-active" : ""}`} //Adds 'is-active' class if menuIsOpen is true
          aria-expanded={menuIsOpen} //aria for accessibility to show if the menu is expanded or not
          onClick={toggleMenu} //toggles menu on the button click
        >
          <FontAwesomeIcon
            icon={faUniversalAccess}
            style={{ fontSize: "50px", color: "#4a4947" }}
          />
        </button>
      </main>

      <motion.div //meaning animated div using framer motion, an npm package
        className="acc-menu"
        initial={{ opacity: 0, scaleY: 0 }} //this is the initial settings of the menu which is not visible
        animate={{ opacity: menuIsOpen ? 1 : 0, scaleY: menuIsOpen ? 1 : 0 }} //animation making menu visible depending on the state of menuIsOpen
        transition={{ duration: 0.3 }} // transition of animation
      >
        <h4>Accessibility Settings</h4>
        <div className="button-panel">
          <button
            onClick={toggleFontSize} //toggles font size function(from useContext) on click
          >
            <FontAwesomeIcon
              icon={faFont}
              size="2xl"
              style={{ color: "#4a4947" }}
            />{" "}
            Bigger Text
          </button>
          <button
            onClick={biggerCursor} //toggles cursor size function(from useContext) on click
          >
            <FontAwesomeIcon
              icon={faArrowPointer}
              size="2xl"
              style={{ color: "#4a4947" }}
            />{" "}
            Bigger Cursor
          </button>
          <button
            onClick={toggleDyslexicFont} //toggles dyslexic font function(from useContext) on click
          >
            <FontAwesomeIcon
              icon={faWandSparkles}
              size="2xl"
              style={{ color: "#4a4947" }}
            />{" "}
            Dyslexic Font
          </button>
          <button
            onClick={toggleHighContrast} //toggles page contrast function(from useContext) on click
          >
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              size="2xl"
              style={{ color: "#4a4947" }}
            />{" "}
            Contrast
          </button>
        </div>
      </motion.div>
    </div>
  );
}
