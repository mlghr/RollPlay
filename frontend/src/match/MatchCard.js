import React from "react";
import "./MatchCard.css";
/** component that displays user profile information to inform matching system */ 

function MatchCard ({src, first, first_name, last, last_name, city, country, age}) {
    return (
    <div className="flip-container">
        <div className="flip-card" draggable="true">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="flip-image" src={src} alt="" />
              </div>
              <div className="flip-card-back">
                <h1 className="flip-text">{first || first_name} {last || last_name}</h1>
                <p className="flip-text">City: {city}</p>
                <p className="flip-text">Country: {country}</p>
                <p className="flip-text">Age: {age}</p>
              </div>
            </div>
        </div>
    </div>
    );
}



export default MatchCard; 