import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import "./Carousel.css";

// const DB_API = process.env.REACT_APP_API_URL || "http://localhost:5000/";

function Carousel() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  async function getRandomUser() {
    try {
      setIsLoading(true);
      //queries randomuser.me for random person 
      let randomMeRes = await axios.get(`https://randomuser.me/api/?inc=name,location,dob,login,picture&results=1`)
      let randomUser = randomMeRes.data.results[0];

      setUser([]);

      setUser(d => [
        ...d,
        {
          id: randomUser.login.id,
          username: randomUser.login.username,
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

  const skipUser = () => console.log("this is skipUser function");
  const confirmMatch = () => getRandomUser();

  const userToDisplay = user.map(u => (
    <Card key={u.id} 
          username={u.username}
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
        <div>
        {userToDisplay}
          <div>
            <img src={user.src}/>
            <button className="genBtn" display="hidden" onClick={skipUser}>Skip</button>
            <button className="genBtn" onClick={confirmMatch}>Match</button> 
          </div>
        </div>
        }
      </>
    );
}

export default Carousel;
