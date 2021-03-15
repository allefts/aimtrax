import React, { Component } from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  //   transform: translate(-50%, -50%);
  color: #3282b8;

  .banner-title {
    font-family: Montserrat;
    font-size: 8rem;
  }

  .banner-text {
    font-family: Barlow;
    font-size: 4rem;
  }

  .begin-btn {
    margin: 20px 0 0 0;
    padding: 20px 60px;
    font-size: 2rem;
    font-family: Barlow;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    border: 0;
    outline: 0;
    z-index: 1;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -2;
      background-color: #3282b8;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 0%;
      width: 100%;
      z-index: -1;
      background-color: #c72c41;
      transition: all 0.3s;
    }

    &:hover {
      &:before {
        // width: 100%;
        height: 100%;
      }
    }
  }
`;

class Banner extends Component {
  render() {
    return (
      <StyledBanner>
        <h1 className="banner-title">Aim-Trax</h1>
        <h2 className="banner-text">Improve your aim, one game at a time.</h2>
        <a href="/aim">
          <button className="begin-btn">BEGIN!</button>
        </a>
      </StyledBanner>
    );
  }
}

export default Banner;
