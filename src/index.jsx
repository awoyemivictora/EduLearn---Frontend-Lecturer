import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/font.css";      // Import fonts first
import "./styles/index.css";     // Import global resets and overrides
import "./styles/tailwind.css";  // Import Tailwind CSS
import "./styles/global.css";    // Import any additional global styles

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
