import React, { createContext, useState, useContext } from "react";

const AccessibilityContext = createContext(); // creating a context

export const AccessibilityProvider = ({ children }) => {
  //all children elements wrapped by this AccessibilityProvider component will have the accessibility settings applied to them
  const [fontSize, setFontSize] = useState(16); //setting the value of all states to false for toggle functions and font to 16 (px font size)
  const [cursorSize, setCursorSize] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  //functions for accessability menu
  const toggleFontSize = () => setFontSize((prev) => prev + 4); // Increases the font size by 4px from current state value
  const biggerCursor = () => setCursorSize((prev) => !prev); //different from current state, will toggle from true/false
  const toggleDyslexicFont = () => setDyslexicFont((prev) => !prev);
  const toggleHighContrast = () => setHighContrast((prev) => !prev);

  return (
    //provider will be applied to App.jsx that makes the accessibility settings available to all children components
    <AccessibilityContext.Provider
      value={{
        fontSize, //current settings and the toggle functions for each from the context above
        toggleFontSize,
        cursorSize,
        biggerCursor,
        dyslexicFont,
        toggleDyslexicFont,
        highContrast,
        toggleHighContrast,
      }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
// any component that calls this will now be able to access these settings :)
