import Banner from "./Banner";
import React, { Component } from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <Banner />
      </StyledHome>
    );
  }
}

export default Home;
