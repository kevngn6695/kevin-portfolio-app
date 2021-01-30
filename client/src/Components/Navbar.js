import React, { Component } from 'react';
import '../Assets/SASS/navbar.scss';

class Navbar extends Component {
  capitalize = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const navList = ['home', 'project', 'about', 'contact'];
    const navListMap = navList.map(navListMap => {
      return <li><div><a href="/">{this.capitalize(`${navListMap}`)}</a></div></li>
    });

    return (
      <div className="navbar-container">
        <ul className="list-container">
          {navListMap}
        </ul>
      </div>
    );
  }
}

export default Navbar;