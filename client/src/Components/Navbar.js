import React, { Component } from 'react';
import {motion} from 'framer-motion';
import '../Assets/SASS/navbar.scss';

import BearLogo from '../Assets/Media/Images/bear-logo-original-white.png';

const transition = {duration: 0.6, ease: [0.23,0.13,0.23,0.96]};
class Navbar extends Component {
  capitalize = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const navList = ['home', 'about', 'contact'];
    const navListMap = navList.map(navListMap => {
      return <li className="list-container-item"><div className="list-container-wrapper"><a className="nav-link" href="/">{this.capitalize(`${navListMap}`)}</a></div></li>
    });

    const mediaList = ['facebook', 'instagram', 'linkedin', 'youtube'];
    const mediaListMap = mediaList.map(mediaListMap => {
      return <motion.div whileHover={{scale: 1.5}} transition={transition} className={`${mediaListMap}`}></motion.div>
    })
    return (
        <nav className="nav">
            <img className="logo-image" src={BearLogo}/>

            <ul className="list-container">
              {navListMap}
            </ul>
            <div className="media-list">
              <a href="/">{mediaListMap}</a>
            </div>
        </nav>
    );
  }
}

export default Navbar;