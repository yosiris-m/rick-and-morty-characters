import "../stylesheets/App.css";
import React from "react";
import FetchData from "../services/Api";
import ls from "../services/localExport";
import logo from "../images/Rick_Morty_logo.png";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      filterText: "",
      filterStatus: "",
      filterSpecie: "",
    };

    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleFilterTextStatus = this.handleFilterTextStatus.bind(this);
    this.handleFilterSpecies = this.handleFilterSpecies.bind(this);
  }

  componentDidMount() {
    const resultLocal = ls.getLocal();
    if (resultLocal) {
      this.setState({ result: resultLocal });
    } else {
      FetchData().then((result) => {
        ls.setLocal(result);
        this.setState({ result: result });
      });
    }
  }

  handleFilterText(ev) {
    this.setState({
      filterText: ev.target.value,
    });
  }

  handleFilterTextStatus(ev) {
    this.setState({
      filterStatus: ev.target.value,
    });
  }

  handleFilterSpecies(ev) {
    this.setState({
      filterSpecie: ev.target.value,
    });
  }

  render() {
    let filterResult = this.state.result.filter((actor) => {
      return (
        actor.name
          .toLowerCase()
          .includes(this.state.filterText.toLowerCase()) &&
        actor.status.includes(this.state.filterStatus) &&
        actor.species.includes(this.state.filterSpecie)
      );
    });

    return (
      <div>
        <div className="title">
          <img src={logo} className="images" alt="imagen" />
        </div>
        <Switch>
          <Route exact path="/">
            <div className="title"></div>
            <Filters
              filterText={this.state.filterText}
              onFilterChange={this.handleFilterText}
              onFilterStatus={this.handleFilterTextStatus}
              filterStatus={this.state.filterStatus}
              onFilterSpecies={this.handleFilterSpecies}
              filterSpecies={this.state.filterSpecie}
            />
            <CharacterList characters={filterResult} />
          </Route>
          <Route
            exact
            path="/character/:id"
            render={(props) => (
              <CharacterDetail {...props} characters={this.state.result} />
            )}
          />
          <Route path="/">
            <div className="notFound">Page not found</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
