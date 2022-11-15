import React from "react";
import "../card/card.component";
import { Card } from "../card/card.component";
import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
