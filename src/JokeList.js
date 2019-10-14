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
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      isLoading: false
    };
    this.currentJokes = new Set(this.state.jokes.map(text => (text.joke)));
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    let newJokeArray = [];
    while (newJokeArray.length < this.props.numJokesToGet){
      let newJoke = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      if(!this.currentJokes.has(newJoke.data.joke)){
        newJokeArray.push({ joke: newJoke.data.joke, votes: 0, id: uuid() });
      }
    }
    this.setState(
      curState => ({
        isLoading: false,
        jokes: [...curState.jokes, ...newJokeArray]
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleVote(id, change) {
    this.setState(
      curState => ({
        jokes: curState.jokes.map(joke =>
          joke.id === id ? { ...joke, votes: joke.votes + change } : joke
        )
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  handleClick() {
    this.setState({ isLoading: true }, this.getJokes);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className="JokeList-loading">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading</h1>
        </div>
      );
    }
    let sortedJokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
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
          <button className="Jokelist-getJoke" onClick={this.handleClick}>
            More Jokes
          </button>
        </div>
        <div className="JokeList-jokes">
          {sortedJokes.map(jokeInfo => (
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
