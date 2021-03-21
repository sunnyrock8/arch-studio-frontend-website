import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  & a {
    width: fit-content;
    display: flex;
    align-items: center;
    background-color: #1b1d23;
    padding: 2.4rem 3rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none !important;
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
class LinkButton extends Component {
  render() {
    return (
      <StyledDiv>
        <Link to={this.props.to}>
          {this.props.label}
          <svg>
            <use xlinkHref="/icons/icon-arrow.svg#icon-arrow"></use>
          </svg>
        </Link>
      </StyledDiv>
    );
  }
}

export default LinkButton;
