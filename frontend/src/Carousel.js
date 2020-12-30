import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import "./Carousel.css";

const DB_API = process.env.REACT_APP_API_URL || "http://localhost:5000/";

function Carousel() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  /** Generates new user from randomuser.me API */

  async function getRandomUser() {
    try {
      setIsLoading(true);
      //store new user 
      let randomMeRes = await axios.get(`https://randomuser.me/api/?inc=name,location,dob,login,picture&results=1`)
      let randomUser = randomMeRes.data.results[0];

      //trigger re-render
      setUser([]);

      setUser(d => [
        ...d,
        {
          id: randomUser.login.id,
          first: randomUser.name.first,
          last: randomUser.name.last,
          city: randomUser.location.city,
          country: randomUser.location.country,
          age: randomUser.dob.age,
          src: randomUser.picture.large
        }
      ]);
      setIsLoading(false);
    } catch(err){
      alert(err);
    }
  }
  
  async function addMatch(){
    let matchRes = await axios.post(`${DB_API}users/match`);
    
  }

  useEffect(() => {
        //OLD CODE, IGNORE
        //generates a random id to query db for next possible match  
        // let userRes = await axios.get(`${DB_API}users/match`);
        // if(!userRes){
        //   throw new Error("User does not exist")
        // }
        // let randomUser = userRes.data.user;
     getRandomUser();
  }, [setUser]);

  const skipUser = () => getRandomUser();
  const confirmMatch = () => getRandomUser();

  const userToDisplay = user.map(u => (
    <Card key={u.id} 
          first={u.first} 
          last={u.last_name} 
          city={u.city}
          country={u.country}
          age={u.age}
          src={u.src} />
  ));
  
    return (
      <>
        {isLoading ? <div className="loader"></div> : 
        <div style={{textAlign: "center", fontFamily: "Lucida Sans"}}>
        Tap/hover to learn more
        {userToDisplay}
          <div>
            <img src={user.src}/>
            <button className="skipBtn btn btn-danger float-left" onClick={skipUser}>Skip</button>
            <button className="matchBtn btn btn-success float-right" onClick={confirmMatch}>Match</button> 
          </div>
        </div>
        }
      </>
    );
}

export default Carousel;
