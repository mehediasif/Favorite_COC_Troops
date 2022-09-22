import React, { Component } from "react";
import "./troopcard.css"

const troops_API = "https://raw.githubusercontent.com/mehediasif/Graphics_Programming/master/assets/"
let padtoThree = (number) => (number <= 100 ? `00${number}`.slice(-3) : number);

class Troopcard extends Component {
  render() {
    let img_src = `${troops_API}${padtoThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
          <h2 className="Pokecard-title">{this.props.name}</h2>
        <div className="Pokecard-Image">
          <img src={img_src} alt={this.props.name}/>
        </div>
        <div className="Pokecard-data">
         <h3>
            Type:{this.props.type}
         </h3>
         <h3>
            Destruction:{this.props.exp}
         </h3>
        </div>
      </div>
    );
  }
}
export default Troopcard;