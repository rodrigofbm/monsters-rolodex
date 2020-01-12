import React from "react";

import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = ({ monsters, searchField }) => {
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="card-list">
      {filteredMonsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
