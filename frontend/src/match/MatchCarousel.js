import React, {useState, useEffect} from "react";
import MatchCard from "./MatchCard";

import RollplayApi from "../api/api";

import "./MatchCarousel.css";

function MatchCarousel() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMatch, setIsMatch] = useState(false);
  const [user, setUser] = useState([]);

  /** Generates new user from randomuser.me API */

  async function getNewUser() {
    try {
      setIsLoading(true);

      let randomUser = await RollplayApi.getUserRandomMe();
      let otherUser = await RollplayApi.getRandomUser();
      console.log(otherUser);
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

  // async function getNewUser(){
  //   try{
  //     setIsLoading(true);
      
  //     // generates a random id to query db for next possible match  
  //     let randomUser = await RollplayApi.getRandomUser();
  //     console.log(randomUser); 
  //     setIsLoading(false);
  //     //trigger re-render
  //     // setUser([]);

  //     // setUser(d => [
  //     //   ...d,
  //     //   {
  //     //     id: randomUser.login.uuid,
  //     //     username: randomUser.login.username,
  //     //     password: randomUser.login.password,
  //     //     first: randomUser.name.first,
  //     //     last: randomUser.name.last,
  //     //     city: randomUser.location.city,
  //     //     country: randomUser.location.country,
  //     //     email: randomUser.email,
  //     //     age: randomUser.dob.age,
  //     //     src: randomUser.picture.large
  //     //   }
  //     // ]);
    
  //   } catch(err) {
  //     console.debug(err);
  //   }
  // }

  // useEffect(() => { 
    
  // }, [setUser]);

  const skipUser = () => {
    getNewUser();
  }
  const matchUser = () => {
    getNewUser();
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
        {isLoading ? 
        <div className="container text-center">
          <div className="lead">Not loading? Try refreshing the page</div>
          <div className="loader"></div>
        </div>
         : 
        <div style={{textAlign: "center", fontFamily: "Lucida Sans"}}>
        Tap/hover to learn more
        {userToDisplay}
          <div>
            <img src={user.src}/>
            <button className="skipBtn btn btn-danger" onClick={skipUser}>Skip</button>
            <button className="matchBtn btn btn-success" onClick={matchUser}>Match</button> 
          </div>
        </div>
        }
      </>
    );
}

export default MatchCarousel;
