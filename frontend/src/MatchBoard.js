import React, {useState, useEffect} from "react";
import axios from "axios";
import "./MatchBoard.css";

import Card from "./Card";

const DB_API = process.env.REACT_APP_API_URL || "http://localhost:5000";

function MatchBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  async function getRandomUser() {
    try {
      setIsLoading(true);
      //store new user 
      let randomMeRes = await axios.get(`${DB_API}/evaluations/:id`)
      let randomUser = randomMeRes.data.results[0];

      //trigger re-render
      setUser([]);

      setUser(d => [
        ...d,
        {
          id: randomUser.login.id,
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
      alert(err);
    }
    console.log(user);
  }

  return(
    <h1>Hi</h1>
  )
}

export default MatchBoard;