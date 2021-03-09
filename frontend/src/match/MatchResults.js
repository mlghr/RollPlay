import React, { useEffect, useState } from "react";
import MatchCard from "../match/MatchCard";
import RollplayApi from "../api/api";

function MatchResults() {
  const [matches, setMatches] = useState([]);

  async function getUserMatches(){
    let res = await RollplayApi.getUserMatches();
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

  const usersToDisplay = 
  matches.map(user => 
    <MatchCard 
      key={user.id} 
      first={user.first} 
      last={user.last}
      about={user.about}
      email={user.email}
      src={user.picture} /> 
    )

  return(
    <div>
      <h1 className="text-center">Match Results</h1>
      {usersToDisplay}
    </div>
    
  )
}

export default MatchResults;