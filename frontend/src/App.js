import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";


import './App.css';
import NavBar from "./NavBar";

// Components to render in routes

import Carousel from "./Carousel"
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Join from './Join';
import Chat from './Chat';


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
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/match" component={Carousel} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/join" exact component={Join} />
          <Route path="/chat" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;