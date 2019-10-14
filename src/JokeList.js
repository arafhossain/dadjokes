import React, { Component } from 'react'
import axios from 'axios';
class JokeList extends Component {
  static defaultProps = {
    numJokesToGet : 10
  };
  constructor(props){
    super(props);
    this.state = {jokes: []}
  }
  async componentDidMount(){
    let newJokeArray = [];
    for(let i = 0; i < this.props.numJokesToGet; i++){
      let newJoke = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
      newJokeArray.push(newJoke.data.joke);
    }
    this.setState({
      jokes: newJokeArray
    })
  }

  render(){
    return (
      <div>
        <h1> List of Jokes</h1>
      </div>
    )
  }
}

export default JokeList;