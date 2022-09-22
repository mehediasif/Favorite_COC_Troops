import React, { Component } from "react";
import Troopcard from "./troopcard.js";
import "./troopdex.css";

class Troopsdex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-Winner">Wining Team</h1>;
    } else {
      title = <h1 className="Pokedex-Looser">Loosing Team</h1>;
    }

    return (
      <div className="Pokedex">
        {title}
        <h3>Total Destruction: {this.props.exp}</h3>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Troopcard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Troopsdex;
