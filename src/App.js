import React from 'react';
import JokeComponent from './Components/JokeComponent';
import './App.css';
import Weather from './Components/Weather';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
      
      <Weather />
      <JokeComponent />
      <Footer/>
      <Contacts/>
    </div>
  );
}

export default App;
