import React from 'react';
import './Weather.css';
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
console.log(currentDate);

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      temperature: '',
      city: '',
      error: '',
    };
    this.weatherHandler = this.weatherHandler.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  changeCity(event) {
    this.setState({
      city: event.target.value,
    });
  }

  weatherHandler(event) {
    // console.log('>>>>>> blah', this.state.city.value);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},&units=metric&appid=3521a7134e34a3e13cf07cc8a692bc63`
    )
      .then((res) => res.json())
      .then((data) => {
        const codeFromData = data.cod;

        if (codeFromData === 200) {
          this.setState({
            weather: `Weather in ${this.state.city.toUpperCase()} is ${
              data.weather[0].description
            }`,
            temperature: `with a temperature of ${data.main.temp} °c`,
            error: ' ',
          });
        } else if (this.state.city.value === undefined) {
          this.setState({
            weather: ' ',
            temperature: ' ',
            error: 'come on!!! enter a city name',
          });
        }
      });
  }
  render() {
    const style = {
      color: 'red',
    };
    return (
      <div className="weather-container">
        <h1>Current Location is: London, UK</h1>
        <h1>{currentDate}</h1>
        <h1>{currentTime}</h1>
        <input
          type="text"
          placeholder="insert city"
          value={this.city}
          onChange={this.changeCity}
        />
        <small style={style}>{this.state.error}</small>
        <button onClick={this.weatherHandler}>get weather</button>
        <h2>{this.state.weather}</h2>
        <h2>{this.state.temperature}</h2>
      </div>
    );
  }
}

export default Weather;
