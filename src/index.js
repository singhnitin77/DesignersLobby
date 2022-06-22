import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./constants/Context";

import App from "./App";
import "./index.css";

axios.defaults.baseURL = "http://localhost:8000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
