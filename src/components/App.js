import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  componentWillMount() {
    axios.get("https://api.github.com/users/zacacollier/gists")
      // eslint-disable-next-line
      .then(res => console.log(res))
      // eslint-disable-next-line
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Blog Starter</h2>
        </div>
      </div>
    );
  }
}

export default App;
