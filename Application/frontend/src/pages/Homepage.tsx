import React from "react";
import { ReactComponent as Logo } from "./svg/app-center-black.svg";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="section1 m-0">
        <Logo id="logo" />
        <h1 id="app-center-heading">App Center</h1>
        <p id="app-center-description">Providing best solutions...</p>
      </div>
      <hr className="m-0" />
      <div className="section2 m-3 text-center">
        <Carousel fade>
          <Carousel.Item>
            <Link to="/converter/l-shaped">
              <img
                className="d-block w-60"
                src="./img/angle.webp"
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Angles</h3>
              <p>
                Unit weight, surface area, sectional area, moment of inertia...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="./img/cold.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Cold Formed U Profiles</h3>
              <p>
                Unit weight, surface area, sectional area, moment of inertia,
                section modulus, plastic modulus...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="./img/hollow.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Hollow Sections</h3>
              <p>
                Unit weight, surface area, sectional area, moment of inertia,
                section modulus, plastic modulus...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="./img/i-sections.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>I-H Shaped Profiles</h3>
              <p>
                Unit weight, surface area, sectional area, moment of inertia,
                section modulus, plastic modulus...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Link to="/converter">
          <Button className="btn-lg" variant="outline-dark">
            Go to Profile Converter Application
          </Button>
        </Link>
      </div>
      <hr className="m-0" />
      
    </React.Fragment>
  );
};

export default Homepage;

/*
 <div className="section3 m-0 p-5 text-center">
        <i className="fa-solid fa-database"></i>
        <div className="content">
          <p className="m-2">Reach out world steel section database!</p>
          <p className="m-2">
            Australia, Brazil, Canada, European Union, France, Germany, India,
            Japan, Mexico, New Zealand, People's Republic of China, Poland,
            Russia, South Korea, United Kingdom, United States, Vietnam...
          </p>
          <p className="m-2">
            According to shapes, standards, regions, manufacturing types.
          </p>
        </div>
        <Link to="/database">
          <Button className="btn-lg" variant="outline-dark">
            Go to Database
          </Button>
        </Link>
      </div>
*/