import React from "react";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";

import Home from "./Home";

/** Overall blog application:
 *
 * - shows header, nav links, and contains routes to:
 *   - new form
 *   - homepage
 *   - individual posts
 */

function App() {

  return (
    <BrowserRouter>
      <div className="App container">
        <NavBar/>
        <header className="App-header jumbotron mt-2">
          <h1 className="App-title display-4">Delvr</h1>
          <p className="lead">Get your game on</p>
        </header>
          <Switch>
            <Route exact path="/users">
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/">
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;