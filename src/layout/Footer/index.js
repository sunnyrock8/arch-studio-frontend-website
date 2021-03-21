import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LinkButton from "../../components/LinkButton";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  width: 90%;
  background-color: #eeeff4;
  margin-top: 20rem;

  & .Footer-logo-container {
    padding: 8rem 5.2rem;
    width: fit-content;
    background-color: #1b1d23;
  }

  & .Footer-logo {
    width: 10rem;
    fill: #fff;
    height: 4rem;
  }

  & .Footer-links {
    margin-left: 8.5rem;
  }

  & .Footer-link {
    font-weight: 600;
    font-size: 1.5rem;
    color: #7d828f;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #1b1d23;
    }

    &:not(:last-child) {
      margin-right: 5.6rem;
    }
  }

  & .Footer-cta {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="Footer-logo-container">
          <svg className="Footer-logo">
            <use xlinkHref="/logo.svg#logo"></use>
          </svg>
        </div>
        <div className="Footer-links">
          <Link to="/portfolio" className="Footer-link">
            Portfolio
          </Link>
          <Link to="/about_us" className="Footer-link">
            About Us
          </Link>
          <Link to="/contact" className="Footer-link">
            Contact
          </Link>
        </div>
        <div className="Footer-cta">
          <LinkButton
            className="Footer-cta"
            to="portfolio"
            label="See Our Portfolio"
          />
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
