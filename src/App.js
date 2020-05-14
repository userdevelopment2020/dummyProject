import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./views/Header";
import Footer from "./views/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="main--wrapper">
        <Header />
        <Switch className="body--wrapper">
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
