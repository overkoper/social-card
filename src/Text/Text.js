import React, { Component } from "react";
import styled from "styled-components";
class Text extends Component {
  render() {
    const Wrapper = styled.div`
      width: 100%;
      height: 200px;
      background-color: white;
      color: black;
      border-radius: 10px;
    `;
    const Link = styled.a`
      color: grey;
      text-decoration: none;
      transition: all 0.5s;
      &:hover {
        color: black;
        text-decoration: underline;
      }
    `;
    const Title = styled.h1`
      font-size: 14px;
      padding: 10px 20px 0px 15px;
    `;
    const Text = styled.p`
      font-size: 12px;
      padding: 0px 20px 10px 20px;
    `;
    return (
      <Wrapper>
        <Title>Title</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          commodo vehicula justo, quis elementum quam sodales non. Morbi id
          dapibus metus. Ut molestie varius mi in fringilla. In ornare porttitor
          dui a rhoncus. Nam eleifend id tellus quis consectetur. Donec eu augue
          rhoncus, ultrices mauris ut, auctor diam. Nam vitae dui nisi. Nunc
          mauris nunc, scelerisque eu nulla sed, suscipit pharetra purus.{" "}
          <Link href="#">link</Link> Vivamus tincidunt aliquet tincidunt.
          Maecenas luctus est eu ex tincidunt gravida. Nam lorem augue, ultrices
          ultrices mi nec, vulputate convallis odio.
        </Text>
      </Wrapper>
    );
  }
}

export default Text;
