import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AccessibilityProvider } from "./components/Accessibility-menu/AccessibilityContextFile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccessibilityProvider>
      <App />
    </AccessibilityProvider>
  </StrictMode>
);
