import React, { Component } from 'react';
import '../Assets/SASS/home.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import $ from 'jquery';

class Home extends Component {

  getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.random(max));
  }

  
  render() {
    const bubbles = []
    for (var i = 1; i <= 10; i++) {
      bubbles.push(<div className={`circle${i}`}></div>)
    }
    return (
      <div className="home-container">

        <div className="container">
          <Navbar/>
          <Footer/>
        </div>
        {bubbles}
        
      </div>
    );
  }
}

export default Home;