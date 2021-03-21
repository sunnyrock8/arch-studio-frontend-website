import React, { Component } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import handleViewport from "react-in-viewport";

import NavigationButton from "./NavigationButton";
import Slide from "./Slide";

const StyledDiv = styled.div`
  width: 100%;

  & .Carousel-nav {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(-8rem);
  }

  & .Carousel-slides-container {
    position: relative;

    height: 80vh;
    width: 100%;
  }

  & .Carousel-slides {
    position: relative;

    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }

  & .Slide {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      goingBack: false,
    };
    this.changingSlide = false;
    this.slides = !Array.isArray(this.props.children)
      ? [this.props.children]
      : this.props.children || [];
    this.maxSlides = this.slides.length;

    // Bind functions
    this.handleNavBtnClick = this.handleNavBtnClick.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    // Auto slide change
    this.changeInterval = setInterval(this.nextSlide, 5500);

    // Left/right arrow keys
    document.addEventListener("keydown", (e) => {
      if (this.props.inViewport) {
        if (e.key === "ArrowRight") this.nextSlide();
        else if (e.key === "ArrowLeft") this.previousSlide();
      }
    });
  }

  handleNavBtnClick(evt) {
    if (this.changingSlide) return;

    const slideIdx = Number(evt.target.dataset.slideIdx);

    if (slideIdx === this.state.currentSlide) return;

    let goingBack = false;
    if (slideIdx < this.state.currentSlide) goingBack = true;
    this.setState({
      currentSlide: +slideIdx,
      goingBack,
    });
    clearInterval(this.changeInterval);
    this.changeInterval = setInterval(this.nextSlide, 5500);
    this.changingSlide = true;
    setTimeout(
      function () {
        this.changingSlide = false;
      }.bind(this),
      1450
    );
  }

  nextSlide() {
    if (this.changingSlide) return;

    if (!window.focus) return;

    const currentSlide = this.state.currentSlide;
    let newSlide = currentSlide;
    currentSlide < this.maxSlides - 1 ? newSlide++ : (newSlide -= newSlide);
    this.setState({
      currentSlide: newSlide,
    });
    this.changingSlide = true;
    setTimeout(
      function () {
        this.changingSlide = false;
      }.bind(this),
      1450
    );
  }

  previousSlide() {
    if (this.changingSlide) return;

    const currentSlide = this.state.currentSlide;
    let newSlide = currentSlide;
    if (currentSlide > 0) {
      newSlide--;
    } else {
      newSlide = this.maxSlides - 1;
    }
    this.setState({
      currentSlide: newSlide,
    });
    this.changingSlide = true;
    setTimeout(
      function () {
        this.changingSlide = false;
      }.bind(this),
      1450
    );
  }

  render() {
    return (
      <StyledDiv>
        <div className="Carousel-slides-container">
          <div className="Carousel-slides">
            {
              <TransitionGroup>
                <CSSTransition
                  key={"" + Math.random()}
                  timeout={1500}
                  classNames={{
                    enter: "push-left-enter fade-enter",
                    enterActive: "push-left-enter-active fade-enter-active",
                    exit: "push-left-exit fade-exit",
                    exitActive: "push-left-exit-active fade-exit-active",
                  }}
                >
                  {this.slides[this.state.currentSlide]}
                </CSSTransition>
              </TransitionGroup>
            }
          </div>
          <nav className="Carousel-nav">
            {this.slides.map((_, i) => (
              <NavigationButton
                data-slide-idx={i}
                onClick={this.handleNavBtnClick}
                key={i}
                active={i === this.state.currentSlide}
              >
                {("" + (i + 1)).length < 2 ? "0" + (i + 1) : i + 1}
              </NavigationButton>
            ))}
          </nav>
        </div>
      </StyledDiv>
    );
  }
}

export default handleViewport(Carousel);
export { Slide };
