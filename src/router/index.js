import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

import "./router.css";

/* View Imports */
import Home from "../views/Home";

class Router extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div
            style={{
              padding: "5.6rem 16.5rem",
            }}
          >
            <NavBar />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="push-left"
                timeout={1500}
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route exact render={() => <h1>Not Found!</h1>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer />
          </div>
        )}
      />
    );
  }
}

export default Router;
