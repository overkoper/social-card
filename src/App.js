import React, { Component } from 'react';
import styled from "styled-components";
import Text from "./Text";
import Image from "./Image";
import './App.scss';

class App extends Component {
  
  render() {
    const Wrapper = styled.div`
    background: black;
    color: white;
    `
    return (
      <Wrapper>
        <Image />
       <Text />
      </Wrapper>
    )
  }
}

export default App;
