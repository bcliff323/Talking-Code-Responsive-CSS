import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./page";
import Home from "./home";
import Grid from "./grid";
import Picture from "./picture";

import "./styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/picture">
          <Page>
            <Picture />
          </Page>
        </Route>
        <Route path="/grid">
          <Page>
            <Grid />
          </Page>
        </Route>
        }
        <Route path="/">
          <Page>
            <Home />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
