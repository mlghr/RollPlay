import React from "react";
import "./MatchCard.css";
/** component that displays user profile information to inform matching system */ 

function MatchCard ({src, first, last, city, country, age, about, email}) {
    return (
    <div className="flip-container">
        <div className="flip-card" draggable="true">
            <div className="flip-card-inner">
              <div className="flip-card-front rounded-circle">
                <img className="flip-image" src={src} alt="User" />
              </div>
              <div className="flip-card-back rounded-circle">
                <h1 className="flip-text">{first} {last}</h1>
                <p className="flip-text">Age: {age}</p>
                <p className="flip-text text-center mt-3">{about}</p>
                <p className="flip-text text-center mt-3">Contact me at: {email}</p>
              </div>
            </div>
        </div>
    </div>
    );
}



export default MatchCard; 