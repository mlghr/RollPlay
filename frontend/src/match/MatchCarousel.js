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
          picture: res.picture
        }
      ]);
      setIsLoading(false);
    } catch(err){
      console.debug(err);
    }
  }

  // TODO: refactor skipUser and matchUser --> essentially the same except for the evt.target value

  /* take in the currentUser, the user being displayed, and the match result based on which button is clicked */
  const skipUser = () => {
    const evaluating_user_id = currentUser.id;
    const evaluated_user_id = user[0].id;
    const evaluation = 'rejected';
    RollplayApi.createEvaluation(evaluating_user_id, evaluated_user_id, evaluation);
  }


  const matchUser = () => {
    const evaluating_user_id = currentUser.id;
    const evaluated_user_id = user[0].id;
    const evaluation = 'accepted';
    console.log(`DATA SENT: ${currentUser.id}, ${user[0].id},  ${evaluation}`)
    RollplayApi.createEvaluation(evaluating_user_id, evaluated_user_id, evaluation);  
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
      src={user.picture} /> 
    )

    useEffect(() => {
      callRandom();
    }, [setUser])
    
    return (
      <div>
          <>
            {isLoading ? 
            <div className="container text-center">
              <div className="lead">Not loading? Try refreshing the page</div>
              <LoadingSpinner/>
            </div>
             : 
            <div style={{textAlign: "center", fontFamily: "Lucida Sans"}}>
            Tap/hover to learn more
            {userToDisplay}
              <div className="carousel-container">
                <img src={user.src} alt=""/>
                <button className="skipBtn btn btn-danger" onClick={skipUser}>Skip</button>
                <button className="matchBtn btn btn-success" onClick={matchUser}>Match</button> 
              </div>
            </div>
            }
          </>
      </div>
    );
}

export default MatchCarousel;
