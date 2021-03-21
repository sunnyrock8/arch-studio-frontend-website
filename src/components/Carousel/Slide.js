import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(/${({ bgImage }) => bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10rem 19rem;

  position: relative;

  & h1 {
    font-weight: 600;
    font-size: 8rem;
    letter-spacing: -2px;
    line-height: 8rem;
    color: #fff;
    z-index: 2;
    width: 40%;
  }

  & p {
    font-weight: 500;
    font-size: 1.5rem;
    color: #fff;
    z-index: 2;
    margin-top: -3rem;
    width: 60%;
    margin-bottom: 4rem;
  }

  & a {
    width: fit-content;
    display: flex;
    align-items: center;
    background-color: #1b1d23;
    padding: 2.4rem 3rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.4s;

    &:hover {
      background-color: #60636d;
    }

    & svg {
      fill: #fff !important;
      width: 2.5rem;
      height: 1.8rem;
      margin-left: 2.4rem;
    }
  }
`;

class Slide extends Component {
  render() {
    return (
      <StyledDiv
        {...this.props}
        className={(this.props.className || "") + " Slide"}
      >
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
        <Link to={this.props.linkTo}>
          {this.props.linkText}
          <svg>
            <use xlinkHref="/icons/icon-arrow.svg#icon-arrow"></use>
          </svg>
        </Link>
      </StyledDiv>
    );
  }
}

export default Slide;
