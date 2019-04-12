import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Text from "./Text";
import Image from "./Image";
import './App.scss';

class App extends Component {
  
  render() {
    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
      },
      slide1: {
        backgroundColor: '#FEA900',
      },
      slide2: {
        backgroundColor: '#B3DC4A',
      },
      slide3: {
        backgroundColor: '#6AC0FF',
      },
    };
    return (
      <SwipeableViews enableMouseEvents>
      <div ><Text /></div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}><Image /></div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
    </SwipeableViews>
    )
  }
}

export default App;
