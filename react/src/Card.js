import React from "react";
import "./Card.css";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
/** Card component that displays user profile information to inform matching system*/ 

function Card (props) {
    return (
        <Container variant="outlined" color="alert">
            <div className="card-body">
                <div className="card-head"></div>
                <Button className="genBtn" variant="contained" color="primary">Skip</Button>
                <div className="card-text">ID: {props.id}</div>
                <img className="card-image" src={props.src} alt=""/>
                <div className="card-text">Name: {props.name}</div>
                <div className="card-text">Age: {props.age}</div>
                <div className="card-text">Race: {props.race}</div>
                <div className="card-text">Class: {props.class}</div>
                <div className="card-text">Background: {props.background}</div>
                <Button variant="contained" color="secondary">Match</Button>
            </div>
        </Container>
    );
}



export default Card; 