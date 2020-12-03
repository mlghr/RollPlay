import React from "react";
import "./Card.css";
/** Card component that displays user profile information to inform matching system*/ 

function Card () {

    return (
        <div className="container">
            <div className="card-head"></div>
            <button className="genBtn">Match</button>
            <ul>
                <li></li>
                <li>Age: </li>
                <li>Race: </li>
                <li>Class: </li>
                <li>Background: </li>
            </ul>
            <button className="genBtn">Skip</button>
            <p>Description: </p>
        </div>
    );
}

export default Card; 