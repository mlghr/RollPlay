import React, {useState, useEffect} from "react";
import axios from "axios";

//components
import MatchCard from "./MatchCard";
import LoadingSpinner from "../shared/LoadingSpinner";

import RollPlayApi from "../api/api";

import "./MatchCarousel.css";


const RU_API = "https://randomuser.me/api";


function MatchCarousel() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMatch, setIsMatch] = useState(false);
  const [user, setUser] = useState([]);

  /** Generates new user from randomuser.me API */

  async function getRandomUser() {
    try {
      setIsLoading(true);
      //store new user 
      let randomUser = await RollPlayApi.getRandomUserDotMe();

      //trigger re-render
      setUser([]);

      setUser(d => [
        ...d,
        {
          id: randomUser.login.uuid,
          username: randomUser.login.username,
          password: randomUser.login.password,
          first: randomUser.name.first,
          last: randomUser.name.last,
          city: randomUser.location.city,
          country: randomUser.location.country,
          email: randomUser.email,
          age: randomUser.dob.age,
          src: randomUser.picture.large
        }
      ]);
      setIsLoading(false);
    } catch(err){
      console.debug(err);
    }
  }

  useEffect(() => { 
        //OLD CODE - IGNORE
        //generates a random id to query db for next possible match  
        // let userRes = await axios.get(`${DB_API}/users/match`);
        // if(!userRes){
        //   throw new Error("User does not exist")
        // }
        // let randomUser = userRes.data.user;
     getRandomUser();
  }, [setUser]);

  const skipUser = () => {
    getRandomUser();
  }
  const matchUser = () => {
    getRandomUser();
  };

  const userToDisplay = user.map(u => (
    <MatchCard key={u.id} 
          first={u.first} 
          last={u.last_name} 
          city={u.city}
          country={u.country}
          age={u.age}
          src={u.src} />
  ));
  
    return (
      <>
        {isLoading ? <LoadingSpinner /> : 
        <div style={{textAlign: "center", fontFamily: "Lucida Sans"}}>
        Tap/hover to learn more
        {userToDisplay}
          <div>
            <img src={user.src}/>
            <button className="skipBtn btn btn-danger float-left" onClick={skipUser}>Skip</button>
            <button className="matchBtn btn btn-success float-right" onClick={matchUser}>Match</button> 
          </div>
        </div>
        }
      </>
    );
}

export default MatchCarousel;
