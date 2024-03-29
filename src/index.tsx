import React from "react";
import "regenerator-runtime";

import ReactDOM from "react-dom/client";
import "./config/configureMobX";
import "./index.css";
import "./styles/global.scss";
import * as Router from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router.HashRouter>
      <App />
    </Router.HashRouter>
  </React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
