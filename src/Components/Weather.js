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
      date: new Date()
    };
    this.weatherHandler = this.weatherHandler.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  callMe(){
    setInterval(()=>{
      this.setState({date: new Date()});
    }, 1000);
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
      
        <div className='date'>{currentDate}</div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        {this.callMe()}
        <input
          type="text"
          placeholder="insert city"
          value={this.city}
          onChange={this.changeCity}
        />
        <small style={style}>{this.state.error}</small>
        <button onClick={this.weatherHandler} className='get-weather-btn'>get weather</button>
        <h2 className='weather'>{this.state.weather}</h2>
        <h2 className='temperature'>{this.state.temperature}</h2>
      </div>
    );
  }
}

export default Weather;
