import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import db from "../config/firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("people").onSnapshot((snapshot) =>
      setPeople(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      )
    );
  }, []);
  return (
    <div className="cardContainer">
      {people.map(({ id, data }) => {
        return (
          <TinderCard key={id} className="swipe" preventSwipe={["up", "down"]}>
            <div className="card" style={{ backgroundImage: `url(${data?.url})` }}>
              <h3>{data.name}</h3>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
}

export default TinderCards;
