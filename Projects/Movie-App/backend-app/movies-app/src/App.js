import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "./components/pages/HomePage";
import MoviesPage from "./components/pages/MoviesPage";
import NewMoviePage from "./components/pages/NewMoviePage";
import NotFoundPage from "./components/NotFoundPage.js";
import HeaderNav from "./components/HeaderNav.js";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />

        <Container text>
          <Switch>
            <Route path="/about" component={AboutUs} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path="/movies/new" component={NewMoviePage} />
            <Route exact path="/movie/:_id" component={NewMoviePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
