import React, { useContext, useState } from "react";
import MatchCard from "./MatchCard";
import LoadingSpinner from "../shared/LoadingSpinner";

import RollplayApi from "../api/api";
import UserContext from "../auth/UserContext";

import "./MatchCarousel.css";

function MatchCarousel() {
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  // isReady determines if the user has started the matching sequence
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState([]);

  /** Generates new user from randomuser.me API */

  async function getNewUser() {
    try {
      setIsLoading(true);
      let res = await RollplayApi.getUserRandomMe();
      // trigger re-render
      setUser([]);

      setUser(d => [
        ...d,
        {
          id: res.login.uuid,
          username: res.login.username,
          password: res.login.password,
          first: res.name.first,
          last: res.name.last,
          city: res.location.city,
          country: res.location.country,
          email: res.email,
          age: res.dob.age,
          src: res.picture.large
        }
      ]);
      setIsLoading(false);
    } catch(err){
      console.debug(err);
    }
  }

  /* generate new user from DB to populate the next carousel image */

  async function callRandom () {
    try {
      setIsLoading(true);
      let res = await RollplayApi.getRandomUser();

      setUser([]);

      setUser(userData => [
        ...userData,
        {
          username: res.username,
          first: res.firstName,
          last: res.lastName,
          age: res.age,
          about: res.about,
          picture: res.picture,
          evaluation: ""
        }
      ])
      setIsLoading(false);
    } catch(err){
      console.debug(err);
    }
  }

  // TODO: refactor skipUser and matchUser --> essentially the same except for the evt.target value

  /* take in the currentUser and the user currently being displayed and the choice based on button */
  const skipUser = () => {
    const user_evaluating = currentUser.username;
    const user_evaluated = user.username;
    let evaluation = user.evaluation;
    evaluation = 'rejected';
    RollplayApi.createEvaluation(user_evaluating, user_evaluated, evaluation);
    callRandom();
    console.debug(user);
  }


  const matchUser = () => {
    const user_evaluating = currentUser.username;
    const user_evaluated = user.username;
    let evaluation = user.evaluation;
    evaluation = 'accepted';
    RollplayApi.createEvaluation(user_evaluating, user_evaluated, evaluation);
    getNewUser();
    console.debug(user);
  };

  const startCarousel = () => {
    callRandom();
    setIsReady(true);
  }




  const userToDisplay =  
    user.map(user => 
    <MatchCard key={user.id} 
      first={user.first} 
      last={user.last} 
      city={user.city}
      country={user.country}
      age={user.age}
      about={user.about}
      src={user.src || user.picture} /> 
    )

  
    return (
      <div>
        {isReady ?
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
          :
          <div className="container text-center">
            <button className="btn btn-primary btn-block btn-lg" onClick={startCarousel}>Start</button>
          </div>
        }
      </div>
    );
}

export default MatchCarousel;
