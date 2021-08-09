import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterList.css";

class CharacterList extends React.Component {
  render() {
    if (this.props.characters.length === 0) {
      return <div className="noResults">No results found 😵 ...... </div>;
    }

    return (
      <div className="CardImages">
        {this.props.characters.map(function (seriesResult, index) {
          return (
            <Link
              className="CardImages"
              key={index}
              to={`/character/${seriesResult.id}`}
            >
              <CharacterCard actor={seriesResult} />
            </Link>
          );
        })}
      </div>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
