// General imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import needed CSS files
import "./index.css";
import "react-typist/dist/Typist.css";

// Import service worker
import * as serviceWorker from "./serviceWorker";

// Render the base application
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
