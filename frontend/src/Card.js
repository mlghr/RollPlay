import React from "react";
import "./Card.css";
/** Card component that displays user profile information to inform matching system*/ 

function Card ({username, src, first, last, city, country, age}) {
    return (
        // <div className="container">
        //     <div className="card-body">
        //         <div className="card-head">{username}</div>
        //         <img className="card-src" src={src} alt="" />
        //         <div className="card-text">Name: {first} {last}</div>
        //         <div className="card-text">City: {city}</div>
        //         <div className="card-text">Country: {country}</div>
        //         <div className="card-text">Age: {age}</div>
        //     </div>
        // </div>
    <>
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="flip-image" src={src} alt="" />
              </div>
              <div className="flip-card-back">
                <h1>{first} {last}</h1>
                <p>{username}</p>
                <p>City: {city} & Country: {country}</p>
                <p>Age: {age}</p>
              </div>
            </div>
        </div>
    </>
    );
}



export default Card; 