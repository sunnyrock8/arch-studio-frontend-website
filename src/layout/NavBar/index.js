import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5.6rem;

  & .Nav-current-page {
    position: absolute;
    top: 20rem;
    left: 3rem;

    font-size: 1.5rem;
    font-weight: 500;
    color: #c8ccd8;
    text-transform: uppercase;
    transform: rotate(90deg);
    letter-spacing: 1.5rem;

    & span {
      position: absolute;
      top: 50%;
      transform: translate(-150%, -50%);

      display: inline-block;
      height: 1px;
      width: 10.4rem;
      background-color: #c8ccd8;
    }

    & .Nav-logo {
      fill: #1b1d23;
    }
  }

  & .Nav-links {
    margin-left: 9.4rem;
  }

  & .Nav-link--active.Nav-link {
    color: #1b1d23;
    position: relative;

    &::after {
      width: 50%;
      transition: width 0.5s;
    }
  }

  & .Nav-link {
    text-decoration: none;
    color: #7d828f;
    font-weight: 600;
    font-size: 1.5rem;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0.7rem);
      transform-origin: center;

      width: 0;
      height: 1px;
      background-color: #1b1d23;
    }

    &:hover {
      color: #1b1d23;
    }

    &:not(:last-child) {
      margin-right: 5.6rem;
    }
  }
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <div className="Nav-current-page">
          <span></span>
          {this.props.location?.pathname === "/"
            ? "Home"
            : this.props.location?.pathname[1].toUpperCase() +
              this.props.location?.pathname?.slice(2).replace("_", " ")}
        </div>
        <NavLink to="/">
          <img src="/logo.svg" className="Nav-logo" alt="Arch Logo" />
        </NavLink>
        <div className="Nav-links">
          <NavLink
            to="/portfolio"
            activeClassName="Nav-link--active"
            className="Nav-link"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about_us"
            className="Nav-link"
            activeClassName="Nav-link--active"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="Nav-link"
            activeClassName="Nav-link--active"
          >
            Contact
          </NavLink>
        </div>
      </StyledNav>
    );
  }
}

export default withRouter(NavBar);
