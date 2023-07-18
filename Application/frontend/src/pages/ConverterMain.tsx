import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ConverterMain.scss";

import VectorCHS from "../vectors/Profile Converter Application/chs";
import VectorCShaped from "../vectors/Profile Converter Application/c-shaped";
import VectorIShaped from "../vectors/Profile Converter Application/i-shaped";
import VectorLShaped from "../vectors/Profile Converter Application/l-shaped";
import VectorRHS from "../vectors/Profile Converter Application/rhs";
import VectorRod from "../vectors/Profile Converter Application/rod";
import VectorUShaped from "../vectors/Profile Converter Application/u-shaped";
import VectorPlate from "../vectors/Profile Converter Application/plate";

const ConverterMain = () => {
  return (
    <React.Fragment>
      <Container className="my-3">
        <h1>Profile Converter Application</h1>
        <ul>
          The application design and definitions are shown below:
          <li>
            This application is written for Built-up Sections (I-H Shaped,
            Angles, Plates & Rods) and Cold-formed Sections (CHS, C-Shaped, RHS,
            U-Shaped).
          </li>
          <li>
            Behind the application, formulas are written by <u>Demet Yücetaş</u>{" "}
            (Solar Department - Engineering) and <u>Aytaç Kılınç</u> (Cost
            Analysis Department - Engineering)
          </li>
        </ul>
      </Container>
      <Container className="row m-auto text-center">
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/l-shaped" className="card-link">
            <VectorLShaped height="100px" />
            <Card.Body>
              <Card.Title className="crd-head">
                L-Shaped Sections (Angles)
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weight, surface area, sectional area, moment of
                inertia.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/i-shaped" className="card-link">
            <VectorIShaped height="100px" />
            <Card.Body>
              <Card.Title className="crd-head">
                I-H Shaped Sections
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weight, surface area, sectional area, moment of
                inertia, section modulus and plastic modulus.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/rhs" className="card-link">
            <VectorRHS height="100px" />
            <Card.Body>
              <Card.Title className="crd-head">
                Rectangular Hollow Sections
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weight, surface area, sectional area, moment of
                inertia, section modulus and plastic modulus.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/chs" className="card-link">
            <VectorCHS height="100px"/>
            <Card.Body>
              <Card.Title className="crd-head">
                Circular Hollow Sections
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weight, surface area, sectional area, moment of
                inertia, section modulus and plastic modulus.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/u-shaped" className="card-link">
            <VectorUShaped height="100px" />
            <Card.Body>
              <Card.Title className="crd-head">
                U-Shaped (Cold-Formed) Sections
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weight, surface area, sectional area, moment of
                inertia, section modulus and plastic modulus.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/c-shaped" className="card-link">
            <VectorCShaped height="100px" />
            <Card.Body>
              <Card.Title className="crd-head">
                C-Shaped (Cold-Formed) Sections
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weight, surface area, sectional area, moment of
                inertia, section modulus and plastic modulus.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/rod" className="card-link">
            <VectorRod height="100px" />
            <Card.Body>
              <Card.Title className="crd-head">
                Circular Bars
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weight, surface area, sectional area.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="card-link col-lg-3 mx-auto my-2 p-2">
          <Link to="/converter/plate" className="card-link">
            <VectorPlate height="100px" />
            <Card.Body>
              <Card.Title className="crd-head">
                Plates (Sheet Metals)
              </Card.Title>
              <Card.Text className="crd-text">
                Get unit weights, surface area, sectional area.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ConverterMain;
