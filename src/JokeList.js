import React, { Component } from "react";
import axios from "axios";
import './JokeList.css'
class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }
  async componentDidMount() {
    let newJokeArray = [];
    for (let i = 0; i < this.props.numJokesToGet; i++) {
      let newJoke = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      newJokeArray.push(newJoke.data.joke);
    }
    this.setState({
      jokes: newJokeArray
    });
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="laugh emoji"/>
          <button className="Jokelist-getJoke">Get more Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(joke => (
            <div>{joke}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
