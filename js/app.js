import React from "react";
import { boot } from "xander";

let routes = [
  {
    path: "/",
    load: System.import("./Welcome")
  },
  {
    path: "/easing",
    load: System.import("./EasingExamples")
  },
  {
    path: "/slidein",
    load: System.import("./SlideIn")
  },
  {
    path: "/slideout",
    load: System.import("./SlideOut")
  },
  {
    path: "/tweencolor",
    load: System.import("./MorphColor")
  },
  {
    path: "*",
    load: System.import("./PageNotFound")
  }
];

require("../styles/app.scss");

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
boot({
  rootEl: document.getElementById("root"),
  debug: true,
  routes
});
