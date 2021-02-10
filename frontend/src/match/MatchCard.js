import React from "react";
import "./MatchCard.css";
/** component that displays user profile information to inform matching system */ 

function MatchCard ({src, first, first_name, last, last_name, city, country, age, about, email}) {
    return (
    <div className="flip-container">
        <div className="flip-card" draggable="true">
            <div className="flip-card-inner">
              <div className="flip-card-front rounded-circle">
                <img className="flip-image" src={src} alt="User provided image" />
              </div>
              <div className="flip-card-back rounded-circle">
                <h1 className="flip-text">{first || first_name} {last || last_name}</h1>
                <p className="flip-text">City: {city}</p>
                <p className="flip-text">Country: {country}</p>
                <p className="flip-text">Age: {age ? age : "None given"}</p>
                <p className="flip-text text-center mt-3">{about}</p>
                <p className="flip-text text-center mt-3">Contact me at: {email}</p>
              </div>
            </div>
        </div>
    </div>
    );
}



export default MatchCard; 