import React, { Component } from 'react';

import '../Assets/SASS/home.scss';

import Footer from './Footer';
import Navbar from './Navbar';

import $ from 'jquery';
import e from 'cors';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.getRandomPosition = this.getRandomPosition.bind(this);
  }

  getRandomPosition = (i) =>{
    const screen_width = window.innerWidth;
    const screen_height = window.innerHeight;
    const s = Math.random() * 10 + 30 * i;
    const x = Math.random() * 1400 + Math.floor(Math.random() * 30 * i);
    const y = Math.random() * 700 + Math.floor(Math.random() * 30 * i);
    if ((x > 0 && x < screen_width - (s/2) - 100) && (y > 0 && y < screen_height*2 - 100)){
      const styles = {
        width: `${s/2}px`,
        height: `${s/2}px`,
        top: `${y}px`,
        left: `${x}px`,
      }
      return styles;
    }else{
      return {};
    }
  }

  render() {
    const bubbles = []
    for (var i = 1; i <= 10; i++) {
      bubbles.push(<div className={`bubbles bubble${i}`} style={this.getRandomPosition(i)}></div>)
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