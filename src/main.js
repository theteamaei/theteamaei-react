import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Vlog from "./components/vlog";

class Main extends Component {
  render() {
    return (
      <>
          {/* This is the alias of BrowserRouter i.e. Router */}
          <Router>
              <Routes>
                  {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
                  <Route
                      exact
                      path="/home"
                      element={<Home />}
                  />

                  {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
                  <Route
                      path="/about"
                      element={<About />}
                  />

                  {/* This route is for contactus component
        with exact path "/contactus", in 
        component props we passes the imported component*/}
                  <Route
                      path="/vlog"
                      element={<Vlog />}
                  />
              </Routes>
          </Router>
      </>
  );
  }
}
export default Main;