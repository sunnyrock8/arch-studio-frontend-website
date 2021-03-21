import React, { Component } from "react";
import slugify from "slugify";

import "./Home.scss";

import LinkButton from "../../components/LinkButton";
import ProjectCard from "../../components/ProjectCard";
import Carousel, { Slide } from "../../components/Carousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.featuredProjects = [
      {
        bgImage: "portfolio/desktop/image-del-sol.jpg",
        title: "Project Del Sol",
      },
      {
        bgImage: "portfolio/desktop/image-228b.jpg",
        title: "228B Tower",
      },
      {
        bgImage: "portfolio/desktop/image-prototype.jpg",
        title: "Le Prototype",
      },
    ];
  }

  render() {
    return (
      <div className="Home">
        <Carousel>
          <Slide
            linkTo="/portfolio"
            linkText="See Our Portfolio"
            bgImage="home/desktop/image-hero-paramour.jpg"
            title="Project Paramour"
            body="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
          />
          <Slide
            linkTo="/portfolio"
            linkText="See Our Portfolio"
            bgImage="home/desktop/image-hero-seraph.jpg"
            title="Seraph Station"
            body="The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
          />
          <Slide
            linkTo="/portfolio"
            linkText="See Our Portfolio"
            bgImage="home/desktop/image-hero-federal.jpg"
            title="Federal II Tower"
            body="A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
          />
          <Slide
            linkTo="/portfolio"
            linkText="See Our Portfolio"
            bgImage="home/desktop/image-hero-trinity.jpg"
            title="Trinity Bank Tower"
            body="Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
          />
        </Carousel>
        <div className="Home-welcome">
          <div className="Home-welcome-text">
            <h1 className="heading">Welcome to Arch Studio</h1>
            <p className="paragraph">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
              <br />
              <br />
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
              <br />
              <br />
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
          <img
            src="/home/desktop/image-welcome.jpg"
            alt="Welcome"
            className="Home-welcome-img"
          />
        </div>
        <div className="Home-about-us">
          <h1 className="heading">
            Small team,
            <br />
            big ideas
          </h1>
          <LinkButton to="about_us" label="About Us" />
        </div>
        <div className="Home-featured">
          <div className="Home-featured-row">
            <h1 className="heading">Featured</h1>
            <LinkButton to="portfolio" label="See All" />
          </div>
          <div className="Home-featured-projects">
            {this.featuredProjects.map((featuredProject, num) => (
              <ProjectCard
                key={slugify(featuredProject.title)}
                num={num + 1}
                {...featuredProject}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
