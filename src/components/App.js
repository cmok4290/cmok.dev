import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Explore from "./Explore";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  render() {
    return (
      <Container fluid>
        <Helmet>
          <title>Chheany Mok</title>
        </Helmet>
        <Navigation/>
        <Switch>
          <Route path="/me"><AboutMe/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/explore"><Explore/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </Container>
    );
  }
}

export default App;
