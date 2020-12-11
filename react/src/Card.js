import React from "react";
import "./Card.css";
/** Card component that displays user profile information to inform matching system*/ 

function Card (props) {
    return (
        <div className="container">
            <div className="card-body">
                <div className="card-head"></div>
                <button className="genBtn">Skip</button>
                <div className="card-text">ID: {props.id}</div>
                <img className="card-image" src={props.src} alt=""/>
                <div className="card-text">Name: {props.name}</div>
                <div className="card-text">Age: {props.age}</div>
                <button className="genBtn">Match</button>
            </div>
        </div>
    );
}



export default Card; 