import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Portfolio from "./Portfolio";
import { Router } from "react-router";

import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import TRACKING_ID from "./keys";
console.log(TRACKING_ID);

ReactGA.initialize(TRACKING_ID);
console.log(ReactGA);

const history = createBrowserHistory();
history.listen((location) => {
  console.log("location:", location);
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <Router history={history}>
    <Portfolio />
  </Router>,
  document.getElementById("root")
);
