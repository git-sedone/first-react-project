import React from 'react';
import './ShareJoke.css';

class ShareJoke extends React.Component {
  constructor() {
    super();
    this.state = {
      jokeLine: '',
      punchLine: '',
      jokeError: '',
      punchError: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.changeLine = this.changeLine.bind(this);
    this.changeLineA = this.changeLineA.bind(this);
  }
  changeLine(event) {
    this.setState({
      jokeLine: event.target.value,
    });
  }
  changeLineA(event) {
    this.setState({
      punchLine: event.target.value,
    });
  }

  clickHandler(event) {
    console.log('click');
    if (this.state.jokeLine.length > 0 && this.state.jokeLine.length <= 10) {
      this.setState({
        jokeError: 'minimum 10 characters required',
      });
    } else if (this.state.jokeLine === '') {
      this.setState({
        jokeError: 'hey you can not win like this!!!',
      });
    } else if (this.state.jokeLine.length >= 10){
      this.setState({
        jokeError: ''
      })
    }

    if (this.state.punchLine === '') {
      this.setState({
        punchError: 'punchline is required',
      });
    } else if (this.state.punchLine.length <= 3) {
      this.setState({
        punchError: 'minimum 3 characters required',
      });
    } else{
      this.setState({
        punchError:''
      })
    }
  }
  render() {
    return (
      <div className="sharejoke-container">
        <h1>Share your wonderful joke with us</h1>
        <h1>You could win $200 a month!!! </h1>
        <textarea
          type="text"
          placeholder="joke line"
          className="joke-line"
          value={this.state.jokeLine}
          onChange={this.changeLine}
        />
        <small>{this.state.jokeError}</small>
        <br />
        <textarea
          type="text"
          placeholder="punchline"
          className="joke-punchline"
          value={this.state.punchLine}
          onChange={this.changeLineA}
        />
        <small>{this.state.punchError}</small>
        <br />
        <button onClick={this.clickHandler}>send</button>
      </div>
    );
  }
}

export default ShareJoke;
