import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import { App } from "./Components/App/App.jsx";
import ForExperiment from "./Components/Experiment/index.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App /> */}
    <ForExperiment />
  </StrictMode>,
);
//5 hour 30 minutes
