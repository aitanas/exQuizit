import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-zinc-900 text-zinc-300 font-mono">
    <App />
    </div>
  </React.StrictMode>
);
