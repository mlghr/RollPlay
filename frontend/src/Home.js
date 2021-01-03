import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div>
      <h1 className="header">Hello</h1>
      <p>
        Welcome to <b>Roll Play</b>, a new way to meet nerds like you
      </p>
      <Link exact to="/match" className="btn genBtn">Start Matching</Link>
    </div> 
  );
}

export default Home;