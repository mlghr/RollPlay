import React from "react";
import "./Card.css";
/** Card component that displays user profile information to inform matching system*/ 

function Card ({username, src, first, last, city, country, age}) {
    return (
        <div className="container">
            <div className="card-body">
                <div className="card-head">{username}</div>
                <img className="card-src" src={src} alt={first} />
                <div className="card-text">Name: {first} {last}</div>
                <div className="card-text">City: {city}</div>
                <div className="card-text">Country: {country}</div>
                <div className="card-text">Age: {age}</div>
            </div>
        </div>
    );
}



export default Card; 