import React, {useState} from "react";
import Card from "./Card";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

function Carousel(props) {
  const [peopleIdx, setPeopleIdx] = useState(0);
  const people = props.people[peopleIdx];
  const total = props.people.length;
  // const leftIconHidden = peopleIdx === 0 ? "hidden" : ""
  // const rightIconHidden = peopleIdx === total - 1 ? "hidden" : "";
  const goForward = () => setPeopleIdx(peopleIdx === total - 1 ? peopleIdx === 0 : peopleIdx + 1);
  const goBack = () => setPeopleIdx(peopleIdx === 0 ? peopleIdx === total - 1 : peopleIdx - 1); 

    return (
        <div>
          <button onClick={goBack} className="button">Back</button>
          {props.people.map(p => (
            <Card
              id={p.id}
              name={p.name}
              age={p.age}
              race={p.race}
              class={p.class}
              background={p.background}
              src={people.src}
              currNum={peopleIdx + 1}
              totalNum={total}
            />
          ))}
          <button onClick={goForward} className="button">Forward</button>
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
