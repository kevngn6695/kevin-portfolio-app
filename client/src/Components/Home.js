import React, { Component } from 'react';
import '../Assets/SASS/home.scss';

import Footer from './Footer';
import Navbar from './Navbar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      bubbles: [],
      
      originalX: 0,
      originalY: 0,

      translatedX: 0,
      translatedY: 0,

      lastTranslatedX: 0,
      lastTranslatedY: 0,

      isDraggable: false
    }
    this.getRandomPosition = this.getRandomPosition.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount = () => {

  }

  componentWillMount = () => {

  }

  componentWillUnmount = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }


  handleMouseMove = ({posX, posY}) => {
    const {isDraggable} = this.state;
    const {onDrag} = this.props;

    if(!isDraggable){
      return;
    }

    this.setState(prevState => ({
      translateX: posX - prevState.originalX + prevState.lastTranslatedX,
      translateY: posY - prevState.originalY + prevState.lastTranslatedY
    }), () =>{
      if (onDrag){
        onDrag({
          translateX: this.state.translatedX,
          translateY: this.state.translatedY
        });
      }
    });
  }

  handleMouseDown = (posX, posY) => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    if(this.props.onDragStart){
      this.props.onDragStart();
    }

    this.setState({
      originalX: posX,
      originalY: posY,
      isDraggable: true
    });
  }

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState({
      originalX: 0,
      originalY: 0,
      lastTranslatedX: this.state.translatedX,
      lastTranslatedY: this.state.translatedY,
      isDraggable: false
    }, () => {
      if (this.props.onDragEnd){
        this.props.onDragEnd();
      }
    })
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
    const bubbles = this.state.bubbles;
    const listPad = this.state.items;
    for (var i = 0; i <= 10; i++) {
      if (i <= 3){
        if (i === 0){
          listPad.push(<li className='pad-wrapper'></li>)
        }
        listPad.push(<li className={`pad-wrapper${i}`}></li>)
      }

      if (i !== 0){
        bubbles.push(<div className={`bubbles bubble${i}`} style={this.getRandomPosition(i)}></div>)
      }
    }

    return (
      <div className="home-container">
        <div className="container">
          <Navbar/>
            <ul className="pad-container">
              {listPad}
            </ul>
          <Footer/>
        </div>
        {bubbles}
      </div>
    );
  }
}