import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./stylesheets/index.css"

import '@typehaus/metropolis/400.css';
import '@typehaus/metropolis/600.css';
import '@typehaus/metropolis/700.css';
import '@typehaus/metropolis/800.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
