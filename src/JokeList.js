import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import uuid from "uuid/v4";
class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]")
    };
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    let newJokeArray = [];
    for (let i = 0; i < this.props.numJokesToGet; i++) {
      let newJoke = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      newJokeArray.push({ joke: newJoke.data.joke, votes: 0, id: uuid() });
    }
    this.setState({
      jokes: newJokeArray
    });
    window.localStorage.setItem("jokes", JSON.stringify(newJokeArray));
  }

  handleVote(id, change) {
    this.setState(curState => ({
      jokes: curState.jokes.map(joke =>
        joke.id === id ? { ...joke, votes: joke.votes + change } : joke
      )
    }));
  }
  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="laugh emoji"
          />
          <button className="Jokelist-getJoke">Get more Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(jokeInfo => (
            <Joke
              votes={jokeInfo.votes}
              text={jokeInfo.joke}
              key={jokeInfo.id}
              id={jokeInfo.id}
              upVote={() => this.handleVote(jokeInfo.id, 1)}
              downVote={() => this.handleVote(jokeInfo.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
