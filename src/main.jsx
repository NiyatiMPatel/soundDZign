import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
// Import all of Bootstrap's JS
// Import Bootstrap JS (side effects only)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
