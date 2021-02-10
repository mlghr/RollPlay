import React, { useEffect, useState } from "react";
import MatchCard from "../match/MatchCard";
import RollplayApi from "../api/api";

function MatchResults() {
  const [matches, setMatches] = useState([]);

  async function getUserMatches(){
    let res = RollplayApi.getUserMatches();
    setMatches([
      {
        id: res.id,
        first: res.firstName,
        last: res.lastName,
        about: res.about,
        picture: res.picture,
        email: res.email
      }
    ])
  }

  useEffect(() => {
    getUserMatches();
  }, [])

  const userToDisplay =  
    matches.map(user => 
    <MatchCard 
      key={user.id} 
      first={user.first} 
      last={user.last} 
      city={user.city}
      country={user.country}
      age={user.age}
      about={user.about}
      src={user.picture} 
      email={user.email}/> 
    )

  return(
    <div>
      <h1 className="text-center">Match Results</h1>
      {userToDisplay}
    </div>
    
  )
}

export default MatchResults;