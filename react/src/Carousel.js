import React, {useState} from "react";
import axios from "axios";
import Card from "./Card";
import randomIdx from "./helpers/randomIdx";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

function Carousel(props) {
  const [peopleIdx, setPeopleIdx] = useState(0);
  const people = props.people[peopleIdx];
  const total = props.people.length;
  // const leftIconHidden = peopleIdx === 0 ? "hidden" : ""
  // const rightIconHidden = peopleIdx === total - 1 ? "hidden" : "";
  const goForward = () => setPeopleIdx(peopleIdx === total - 1 ? 0 : peopleIdx + 1);
  const goBack = () => setPeopleIdx(peopleIdx === 0 ? (total - 1) : peopleIdx - 1);
  
  async function getNextPerson(){
    const res = await axios.get(`/user?id=${randomIdx}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(res);
  }

    return (
        <div>
          <button onClick={goBack} className="genBtn">Skip</button>
          {props.people.map(p => (
            <Card
              id={p.id}
              name={p.name}
              age={p.age}
              src={people.src}
              currNum={peopleIdx + 1}
              totalNum={total}
            />
          ))}
          <button onClick={goForward, getNextPerson} className="genBtn">Match</button>
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
