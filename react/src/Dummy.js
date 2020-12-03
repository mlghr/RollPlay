import react from "react";
import "./Dummy.css";
/** Card component that displays user profile information to inform matching system*/ 

function Dummy (props) {

    return (
        <div className="container">
            <div className="card-head"></div>
            <ul>
                <li> </li>
                <li>Age: </li>
                <li>Race: </li>
                <li>Class: </li>
                <li>Background: </li>
            </ul>
            <p>Description: </p>
        </div>
    )
}

export default Dummy; 