import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const app = document.querySelector("#root");

if (!app) {
  throw new Error(" No root element found");
}
const root = createRoot(app);

root.render(<App />);