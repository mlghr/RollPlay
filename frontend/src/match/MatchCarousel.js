import React, { useContext, useState, useEffect} from "react";
import MatchCard from "./MatchCard";
import LoadingSpinner from "../shared/LoadingSpinner";

import RollplayApi from "../api/api";
import UserContext from "../auth/UserContext";

import "./MatchCarousel.css";

function MatchCarousel() {
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [evaluation, setEvaluation] = useState({})

  /* generate new user from DB to populate the next carousel image */

  async function callRandom () {
    try {
      setIsLoading(true);
      let res = await RollplayApi.getRandomUser();

      setUser([
        {
          id: res.id,
          username: res.username,
          first: res.firstName,
          last: res.lastName,
          age: res.age,
          about: res.about,
          email: res.email,
          picture: res.picture
        }
      ]);

      setEvaluation({
        evaluatingUserID: currentUser.id,
        evaluatedUserID: res.id,
        evalDecision: null
      });

      setIsLoading(false);
    } catch(err){
      console.debug(err);
    }
  }

  // TODO: refactor skipUser and matchUser --> essentially the same except for the evt.target value

  /* take in the currentUser and the user currently being displayed and the choice based on which button */
  function skipUser(evt) {
    evt.preventDefault();
    evaluation.evalDecision = 'rejected';
    RollplayApi.createEvaluation(evaluation);
    callRandom();
  }


  function matchUser(evt) {
    evt.preventDefault();
    evaluation.evalDecision = 'accepted';
    RollplayApi.createEvaluation(evaluation);
    callRandom();
  };

  const userToDisplay =  
    user.map(user => 
    <MatchCard 
      key={user.id} 
      first={user.first} 
      last={user.last} 
      city={user.city}
      country={user.country}
      age={user.age}
      about={user.about}
      email={user.email}
      src={user.picture} /> 
    )

    useEffect(() => {
      callRandom();
    }, [])
    
    return (
      <div>
        {isLoading ? 
        <div className="container text-center">
          <div className="lead">Not loading? Try refreshing the page</div>
          <LoadingSpinner/>
        </div>
         : 
        <div className="text-center">
        <h3>Tap or Hover to learn more</h3>
        {userToDisplay}
          <div className="carousel-container">
            <img src={user.src} alt=""/>
            <button className="skipBtn btn btn-danger" onClick={skipUser}>Skip</button>
            <button className="matchBtn btn btn-success" onClick={matchUser}>Match</button> 
          </div>
        </div>
        }
      </div>
    );
}

export default MatchCarousel;
