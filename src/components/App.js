import React, { Component } from "react";
import axios from "axios";
import ListOfPosts from "./ListOfPosts";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  componentWillMount() {
    axios.get("https://api.github.com/users/zacacollier/gists")
      .then(res => this.setState({ results: res.data }))
      // eslint-disable-next-line
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Blog Starter</h2>
        </div>
        <ListOfPosts
          posts={this.state.results}
        />
      </div>
    );
  }
}
