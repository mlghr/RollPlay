import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";

// Components to render in routes

import Carousel from "./Carousel"
import Home from "./Home";
import SignUp from "./SignUp";

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
        <NavBar />
        <Switch>
          <Route exact path="/users/:c_name" component={Carousel}/>
          <Route exact path="/users" component={Carousel}/>
          <Route exact path="/auth/login" component={SignUp}/>
          <Route exact path="/auth/register" component={SignUp}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;