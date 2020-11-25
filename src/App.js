import React from 'react';
import JokeComponent from './Components/JokeComponent';
import Form from './Components/Form';
import './App.css';
import Weather from './Components/Weather';
import ShareJoke from './Components/ShareJoke';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Weather />
      <JokeComponent />
      <Footer/>
      
    </div>
  );
}

export default App;
