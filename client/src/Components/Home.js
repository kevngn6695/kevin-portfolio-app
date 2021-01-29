import React, { Component } from 'react';
import '../Assets/SASS/home.scss';
import Footer from './Footer';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div className="home-container">

        <div className="container">
          <Navbar/>
          <Footer/>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        
      </div>
    );
  }
}

export default Home;