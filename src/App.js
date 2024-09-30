import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/HomeSection";
import Scroll from "./home/Scroll";
function App() {
  return (
    <div>
      <Home />
      <Scroll />
    </div>
  );
}

export default App;
