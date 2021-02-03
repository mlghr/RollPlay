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
          first: res.first_name,
          last: res.last_name,
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

  const skipUser = () => {
    callRandom();
  }

  /* need to take in the currentUser and the user currently being displayed */

  const matchUser = () => {
    const user_evaluating = currentUser.username;
    const user_evaluated = user.username;
    const evaluation = user.evaluation;
    evaluation = 'accepted';

    RollplayApi.createEvaluation(user_evaluating, user_evaluated, evaluation);
    getNewUser();
  };

  const startCarousel = () => {
    callRandom();
    setIsReady(true);
  }

  const userToDisplay = user.map(u => (
    <MatchCard key={u.id} 
          first={u.first} 
          last={u.last_name} 
          city={u.city}
          country={u.country}
          age={u.age}
          src={u.src} /> ));
  
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
                <img src={user.src}/>
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
