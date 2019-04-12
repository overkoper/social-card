import React, { Component } from "react";
import styled from "styled-components";
import Text from "./Text";
import Image from "./Image";

class App extends Component {
  render() {
    const Root = styled.div`
      width: 480px;
      margin: 0 auto;
      border: 2px solid grey;
      border-radius: 10px;

      @media only screen and (max-width: 479px;) {
        width: 100%;
      }
    `;
    return (
      <Root>
        <Image />
        <Text />
      </Root>
    );
  }
}

export default App;
