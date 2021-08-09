import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filter.css";

class Filters extends React.Component {
  render() {
    return (
      <form>
        <div className="inputTextBox">
          <input
            className="inputText"
            type="text"
            placeholder="Write your character"
            onChange={this.props.onFilterChange}
            value={this.props.filterText}
          />

          <select
            className="selectStatus"
            onChange={this.props.onFilterStatus}
            value={this.props.filterStatus}
          >
            <option value="" className="option">
              Status
            </option>
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <select
            className="selectSpecie"
            onChange={this.props.onFilterSpecies}
            value={this.props.filterSpecie}
          >
            <option value="" className="option">
              Specie
            </option>
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
          </select>
        </div>
      </form>
    );
  }
}

Filters.propTypes = {
  onFilterChange: PropTypes.func,
  filterText: PropTypes.string,
  onFilterSpecie: PropTypes.func,
  filterSpecie: PropTypes.string,
};

export default Filters;
