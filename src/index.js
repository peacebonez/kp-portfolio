import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Portfolio from "./Portfolio";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
