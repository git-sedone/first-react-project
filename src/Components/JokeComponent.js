import React from 'react';
import './JokeComponent.css';

class JokeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeText: '',
      jokePunchLine: '',
      showAnswerButton: false,
      showSolution: false,
    };
    this.randomJokeHandler = this.randomJokeHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.answerClickHandler = this.answerClickHandler.bind(this);
    this.openJoke = this.openJoke.bind(this);
    this.closeJoke = this.closeJoke.bind(this);
  }

  answerClickHandler(event) {
    this.setState({
      showSolution: true,
    });
  }

  changeHandler(event) {
    this.setState({
      answer: event.target.value,
    });
  }

  randomJokeHandler(event) {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.setup, ':', data.punchline);

        const newState = {
          jokeText: data.setup,
          jokePunchLine: data.punchline,
          showAnswerButton: true,
          showSolution: '',
        };

        this.setState(newState);
      });
  }
  openJoke() {
    this.setState({
      showJoke: true,
    });
  }
  closeJoke() {
    this.setState({
      showJoke: false,
      jokeText: '',
      showAnswerButton: false,
      showSolution: '',
    });
  }

  render() {
    return (
      <div>
        <div className="hamburger-menu">
          <i className="fa fa-bars fa-3x" id="bars" onClick={this.openJoke}></i>
        </div>
        <div className="joke-btn" onClick={this.openJoke}>
          Smile with Me
        </div>
        {this.state.showJoke ? (
          <div className="joke-container">
            <i className="fa fa-times fa-3x" onClick={this.closeJoke}></i>
            <h1>Start the day with a Laugh</h1>
            <button className="get-joke-btn" onClick={this.randomJokeHandler}>
              Get Joke
            </button>
            <h1>{this.state.jokeText}</h1>{' '}
            {this.state.showAnswerButton === true ? (
              <div className="punch-container">
                <button
                  className="get-punch-btn"
                  onClick={this.answerClickHandler}
                >
                  check Punchline
                </button>
              </div>
            ) : null}
            {this.state.showSolution === true ? (
              <h1>{this.state.jokePunchLine}</h1>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default JokeComponent;
