import React from "react";
import ReactDOM from "react-dom";

import Cinema from "./components/Cinema";
import { chairs } from "./utils";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Cinema chairs={chairs} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
