import React from "react";
import styled from "styled-components";
import photo from "./profile-photo.png";

export default function Image() {
  const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Wrapper>
      <img alt="profile photo" src={photo} />
    </Wrapper>
  );
}
