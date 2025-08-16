import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CitiesContext from "./context/CitiesContext";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <CitiesContext>
    <App />
  </CitiesContext>
);
