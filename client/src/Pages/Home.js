import React, { Component } from 'react';
import '../Assets/SASS/home.scss';
import StackGrid from "react-stack-grid";
import {motion} from 'framer-motion';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const transition = {duration: 0.6, ease: [0.43,0.13,0.23,0.96]};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      bubbles: [],
    }
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

    const bubbles = [];
    for (var i = 1; i <= 10; i++) {
      bubbles.push(<div className={`bubbles bubble${i}`} style={this.getRandomPosition(i)}></div>)
    }
    return (
      <div className="home-container">
        <div className="container">
          <Navbar/>
          <ul className="pad-container">
            <motion.li whileHover={{scale: 1.05}} transition={transition} className='pad-wrapper'></motion.li>
            <motion.li whileHover={{scale: 1.05}} transition={transition} className='pad-wrapper1'></motion.li>
            <motion.li whileHover={{scale: 1.05}} transition={transition} className='pad-wrapper2'></motion.li>
          </ul>
          <Footer/>
        </div>
        {bubbles}
      </div>
    );
  }
}