import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(userdata => this.setState({ monsters: userdata }))
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filtermonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>SEARCH JAVASCRIPT NINJA</h1>
        <SearchBox placeholder="Search Users" handleChange={this.handleChange} />
        <CardList monsters={filtermonster} />

      </div>
    );
  }
}

export default App;
