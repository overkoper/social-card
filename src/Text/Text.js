import React, { Component } from 'react';
import styled from "styled-components";
import "./Text.css";
class Text extends Component {
  render() {
    const Wrapper = styled.p`
    width: 100px;
    height: 100px;
    background-color: red;
    `
    return (
      <Wrapper>
      text
      </Wrapper>
    )
  }
}

export default Text;
