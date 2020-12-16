import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import randomIdFrom from "./helpers/randomIdFrom";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

function Carousel(props) {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  // const [peopleIdx, setPeopleIdx] = useState(0);
  // const people = props.people[peopleIdx];
  // const total = props.people.length;

  useEffect(() => {
    getUserCount()
      .then(res => console.log(res.json()))
      .then(
        (result) => {
          setIsLoaded(true);
          set(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

/** retrieves total number of users in db */

  async function getUserCount(){
    const idRes = await axios.get(`${API_URL}users/count`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
    const userCount = await idRes.data[0].count;
    
    return userCount;
  }

/** generates a random id to query db for next possible match */

  async function getRandomUser(userCount){
    userCount = await getUserCount();
    let randomId = randomIdFrom(userCount);
    const nextUser = await axios.get(`${API_URL}users/${randomId}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
    return nextUser;
  }
    

  const goForward = function() {
    getRandomUser();
    setPeopleIdx(peopleIdx === total - 1 ? 0 : peopleIdx + 1)
  }
  const goBack = () => setPeopleIdx(peopleIdx === 0 ? (total - 1) : peopleIdx - 1);
  


  
    return (

        <div>
          {props.people.map(p => (
            <Card
              id={p.id}
              name={p.name}
              age={p.age}
              src={people.src}
              totalNum={total}
            />
          ))}
          <div>{isLoaded ? person : <h1>Loading...</h1>}</div>
          <button onClick={goBack} className="genBtn">Skip</button>
          <button onClick={goForward} className="genBtn">Match</button>
          <button onClick={getUserCount} className="genBtn">Count</button>
          <button onClick={getRandomUser} className="genBtn">RandomUser</button>
        </div>
    );
}

Carousel.defaultProps = {
    people: [
        { id: 1, src:image1, name: "Judy", age: "32"},
        { id: 2, src:image2, name: "Frank", age: "42"},
        { id: 3, src:image3, name: "Judy", age: "52"}
    ]
}

export default Carousel;
