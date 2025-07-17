import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResumeProvider } from "./context/ResumeContext";
import { ThemeProvider } from "./context/ThemeContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ResumeProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </ResumeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
