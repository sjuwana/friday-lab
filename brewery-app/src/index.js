import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
