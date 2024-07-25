import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GradeProvider } from "./GradeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GradeProvider>
      <App />
    </GradeProvider>
    
  </React.StrictMode>
);
