import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  position: relative;
  height: 56rem;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0.01%,
      rgba(0, 0, 0, 0.499044) 100%
    ),
    url(/${({ bgImage }) => bgImage});
  background-size: cover;
  backdrop-filter: sepia(10%);
  overflow-x: hidden;

  & .ProjectCard-content {
    position: absolute;
    bottom: 4.2rem;
    left: 4rem;
  }

  & .ProjectCard-title {
    font-weight: 600;
    font-size: 1.8rem;
    color: #fff;
    text-transform: capitalize;
  }

  & .ProjectCard-link {
    font-weight: 500;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  &::before {
    content: "${({ num }) => num}";
    position: absolute;
    top: 3.4rem;
    right: -1.5rem;
    font-weight: 700;
    font-size: 20rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

class ProjectCard extends Component {
  static defaultProps = {
    to: "/portfolio",
  };

  render() {
    return (
      <StyledDiv {...this.props}>
        <div className="ProjectCard-content">
          <h3 className="ProjectCard-title">{this.props.title}</h3>
          <Link to={this.props.to} className="ProjectCard-link">
            View All Projects
          </Link>
        </div>
      </StyledDiv>
    );
  }
}

export default ProjectCard;
