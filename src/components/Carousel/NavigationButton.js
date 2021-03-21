import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 3rem;
  background-color: #${({ active }) => (active ? "1B1D23" : "fff")};
  color: #${({ active }) => (active ? "fff" : "7D828F")};
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  width: 8rem;
  height: 8rem;
  border: none;
  outline: none;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: #${({ active }) => (active ? "1B1D23" : "eeeff4")};
  }
`;

class NavigationButton extends Component {
  render() {
    return (
      <StyledButton {...this.props} onClick={this.props.onClick}>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default NavigationButton;
