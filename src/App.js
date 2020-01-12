import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeHolder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={monsters} searchField={searchField} />
      </div>
    );
  }
}

export default App;
