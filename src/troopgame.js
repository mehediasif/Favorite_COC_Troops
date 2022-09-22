import React, { Component } from "react";
import Troopsdex from "./troopsdex";

class Troopsgame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Sneaky Archer", type: "Hidden Archer", base_experience: 62 },
      { id: 7, name: "Super Minions", type: "Flying Bug", base_experience: 63 },
      { id: 11, name: "Archer Queen", type: "HERO", base_experience: 350 },
      { id: 12, name: "Royal Champion", type: "HERO", base_experience: 370 },
      { id: 15, name: "Electro Dragon", type: "Dragon", base_experience: 330 },
      { id: 19, name: "Battle Machine", type: "HERO", base_experience: 320 },
      { id: 20, name: "Barbarian King", type: "HERO", base_experience: 300 },
      { id: 3, name: "Super Barbanian", type: "Raged", base_experience: 85 },
      { id: 9, name: "Super Wizard", type: "Super Troop", base_experience: 250 },
      { id: 5, name: "Wall Bomber", type: "Super bomber", base_experience: 150 },
      { id: 17, name: "Flame_thrower", type: "Seige Machine", base_experience: 120 },
      { id: 18, name: "Battle Blimp", type: "Seige MAchine", base_experience: 140 },
      { id: 2, name: "Barbarian", type: "Ground", base_experience: 65 },
      { id: 1, name: "Archer", type: "Ground Archer", base_experience: 55 },
      { id: 6, name: "Wall Breaker", type: "bomber", base_experience: 100 },
      { id: 8, name: "Minion", type: "Flying Bug", base_experience: 55 }
    ]
  };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIDX = Math.floor(Math.random() * hand2.length);
      let randpokemon = hand2.splice(randIDX, 1)[0];
      hand1.push(randpokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    console.log(hand1);
    console.log(hand2);
    return (
      <div>
        <h4>16 supercell troop taken and divided them into two random teams to see which team wins based on their hitpoints.</h4>
        <h4>
        Refresh The website to shuffle the temas.
        </h4>
        <Troopsdex pokemon={hand1} exp = {exp1} isWinner={exp1 > exp2} />
        <Troopsdex pokemon={hand2} exp = {exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
export default Troopsgame;
