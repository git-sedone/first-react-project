import React from 'react';
import './JokeComponent.css';

/**
 * INDIVIDUAL COMMITS FOR EVERY WORK
 * close button to the right...............x
 * default location in home page............x
 * validation message font color change everywhere.......x
 * spacing between registration fields..............x
 * Clean data in joke & punchline upon submission.....x
 * 
 */

class JokeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      // showJoke:false,
      jokeText: {},
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
    console.log(event.target.value);
  }

  randomJokeHandler(event) {
    console.log('click');
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          jokeText: data,
          showAnswerButton: true,
          showSolution: ' ',
        })
      );
  }
  openJoke(){
    this.setState({
      showJoke: true
    })
  }
  closeJoke(){
    this.setState({
      showJoke:false

    })

  }

  render() {
    

    return (
      <div>
        <button className='joke-btn' onClick={this.openJoke}>Play with Us</button>

        {this.state.showJoke ?
        
        <div className="joke-container" style = {{width:'350px'}}>
          <i className="fa fa-times fa-3x" onClick={this.closeJoke}></i>
          <h1>Start the day with a Laugh</h1>
          <button onClick={this.randomJokeHandler}>Get Joke</button>
          <h1>{this.state.jokeText.setup}</h1>{' '}
          {this.state.showAnswerButton === true ? (
            <div>
              <button onClick={this.answerClickHandler}>check Punchline</button>
            
            </div>
          ) : null}
          {this.state.showSolution === true ? (
            <h2>{this.state.jokeText.punchline}</h2>
          ) : null}
        </div>
        : null
      }
        
        
    
      </div>
    );
  }
}

export default JokeComponent;
