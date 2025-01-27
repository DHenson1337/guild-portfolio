import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import App from "./App.jsx";
// Basline css Reset
import "normalize.css";
// GLobal Styles
import "./styles/global.css";
//Theme Styles
import "./styles/theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
