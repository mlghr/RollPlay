import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";


import './App.css';
import NavBar from "./NavBar";

// Components to render in routes

import Carousel from "./Carousel"
import Home from "./Home";
import SignUp from "./SignUp";
import Chat from './Chat';
import Join from './Join';

/** Overall application:
 *
 * - shows header, nav links, and contains routes to:
 *   - new form
 *   - homepage
 *   - messaging
 *   - button to start matching
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:name" component={Carousel} />
          <Route exact path="/users" component={Carousel} />
          <Route exact path="/auth/login" component={SignUp} />
          <Route exact path="/auth/register" component={SignUp} />
          <Route path="/join" exact component={Join} />
          <Route path="/chat" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;