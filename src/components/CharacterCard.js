import React from "react";
import "../stylesheets/CharacterCard.css";
import PropTypes from "prop-types";

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="cardBox">
        <div>
          <img
            className="photo"
            src={this.props.actor.image}
            alt="CharacterCard"
          />
        </div>
        <div className="lasName">{this.props.actor.name}</div>
        <div className="lastSpecies">{this.props.actor.species}</div>
      </div>
    );
  }
}

CharacterCard.propTypes = {
  actor: PropTypes.object,
};

export default CharacterCard;
