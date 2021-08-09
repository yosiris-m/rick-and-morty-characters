import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.css";
import NotFound from "./NotFound";
import PropTypes from "prop-types";
class CharacterDetail extends React.Component {
  render() {
    const character = this.props.characters.find(
      (character) => `${character.id}` === this.props.match.params.id
    );
    if (!character) {
      return <NotFound />;
    }

    let statusIcon;
    if (character.status === "Dead") {
      statusIcon = <i class="fa-solid fa-coffin-cross" className="dead"></i>;
    } else if (character.status === "Alive") {
      statusIcon = <i class="fa-solid fa-heart"></i>;
    } else {
      statusIcon = <span>{character.status}</span>;
    }

    return (
      <div>
        <Link className="linkHome" to="/">
          initial Home
        </Link>
        <div>
          <div className="containerCard1">
            <img
              className="containerImage"
              src={character.image}
              alt="Character"
            />

            <div className="description">
              <div className="lasNameCard">{character.name}</div>
              <div className="lasName1">Status:{statusIcon}</div>
              <div className="lasName1">Species:{character.species}</div>
              <div className="lasName1">Origin:{character.origin.name}</div>
              <div className="lasName1">Episode:{character.episode}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CharacterDetail.propTypes = {
  character: PropTypes.array,
  characters: PropTypes.array,
};

export default CharacterDetail;
