import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

import { useParams } from "react-router-dom";

import "./DatabaseElement.scss";

import LShapedAnglesVectors from "../vectors/Database/l-shaped";
import IShapedVectors from "../vectors/Database/i-shaped";
import RHSVectors from "../vectors/Database/rhs";
import CHSVectors from "../vectors/Database/chs";
import UShapedVectors from "../vectors/Database/u-shaped";

const DatabaseElement = () => {
  const parameters = useParams();

  const [heading, setHeading] = useState("");

  const [standardElement, setStandardelement] = useState({
    name: "",
    standard: "",
    region: "",
    shape: "",
    manufacturing_type: "",
    definition: "",
    vector: "",
    tableHeaders: [],
    elements: [],
  });

  const headings: { heading: string; url: string }[] = [
    { heading: "Standard C-Shaped Profiles", url: "c-shaped" },
    { heading: "Standard Circular Hollow Sections", url: "chs" },
    { heading: "Standard I-H Shaped Profiles", url: "i-shaped" },
    { heading: "Standard L- Shaped Profiles (Angles)", url: "l-shaped" },
    { heading: "Standard Plates", url: "plate" },
    { heading: "Standard Rectangular Hollow Sections", url: "rhs" },
    { heading: "Standard Circular Bars", url: "rod" },
    { heading: "Standard U-Shaped Profiles", url: "u-shaped" },
  ];

  useEffect(() => {
    for (const elem of headings) {
      if (elem.url === parameters.profileType) {
        setHeading(elem.heading);
        break;
      }
    }
  }, [parameters.profileType]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/database/element/${parameters.profileType}/${parameters.profileId}`
      )
      .then(function (response) {
        setStandardelement(response.data);
        document.title = response.data.definition
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parameters.profileType, parameters.profileId]);

  return (
    <Container className="m-3 database-element-container">
      <h1>{heading}</h1>
      <Container>
        <h3 className="m-5">{standardElement.definition}</h3>
        <Container className="text-center">
          {parameters.profileType === "l-shaped" && (
            <LShapedAnglesVectors
              model={standardElement.vector}
              height="300px"
            />
          )}
          {parameters.profileType === "i-shaped" && (
            <IShapedVectors model={standardElement.vector} height="300px" />
          )}
          {parameters.profileType === "rhs" && (
            <RHSVectors model={standardElement.vector} height="300px" />
          )}
          {parameters.profileType === "chs" && (
            <CHSVectors model={standardElement.vector} height="300px" />
          )}
          {parameters.profileType === "u-shaped" && (
            <UShapedVectors model={standardElement.vector} height="300px" />
          )}
        </Container>
      <Container className="row text-center">
        <p className="col-lg-2 col-6">Standard:</p>
        <p className="col-lg-2 col-6">{standardElement.standard}</p>
        <p className="col-lg-4"></p>
        <p className="col-lg-2 col-6">Region:</p>
        <p className="col-lg-2 col-6">{standardElement.region}</p>
        <p className="col-lg-2 col-6">Shape:</p>
        <p className="col-lg-2 col-6">{standardElement.shape}</p>
        <p className="col-lg-4"></p>
        <p className="col-lg-2 col-6">Manufacturing Type:</p>
        <p className="col-lg-2 col-6">{standardElement.manufacturing_type}</p>
      </Container>
      </Container>
      <Container className="p-2 database-element-table-container">
        <Table striped bordered hover className="database-element-table">
          <thead>
            <tr>
              {standardElement.tableHeaders.map((elem, ind) => (
                <th key={"th_" + ind}>{elem}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standardElement.elements.map(
              (elem: { [keys: string]: string | number }, ind) => (
                <tr key={"tr_" + ind}>
                  {Object.entries(elem).map(([key, value]) => (
                    <td key={"td_" + key + ind}>
                      {elem[key] === 0 ? "N/A" : elem[key]}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default DatabaseElement;
