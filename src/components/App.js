import React from "react";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Hire from "./Hire/Hire";
import Contact from "./Contact/Contact";
import Explore from "./Explore/Explore";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <Container fluid className="app">
        <Navigation />
        <Switch>
          <Route path="/me">
            <AboutMe />
          </Route>
          <Route path="/hire">
            <Hire />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default App;
