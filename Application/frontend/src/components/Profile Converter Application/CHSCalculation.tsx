import React, { useState } from "react";
import axios from "axios";
import { Container, Button, Table } from "react-bootstrap";

import VectorCHS from "../../vectors/Profile Converter Application/chs";

import InputElement from "./InputElement";
import "./Calculation.scss";

const CHSCalculation = () => {
  /*interface CHSInput {
    d: number;
    t: number;
    qty: number;
    length: number;
  }*/

  interface CHSOutput {
    g: number;
    u: number;
    a: number;
    i: number;
    s: number;
    z: number;
    pieceWeight: number;
    totalWeight: number;
  }

  // Inputs
  const [d, setD] = useState("");
  const [t, setT] = useState("");
  const [qty, setQty] = useState("1");
  const [length, setLength] = useState("1000");

  const [errorText, setErrorText] = useState("");

  // Outputs
  const [fetchData, setFetchData]: [
    CHSOutput,
    React.Dispatch<React.SetStateAction<CHSOutput>>
  ] = useState({
    g: 0,
    u: 0,
    a: 0,
    i: 0,
    s: 0,
    z: 0,
    pieceWeight: 0,
    totalWeight: 0,
  });

  const [showOutputs, setShowOutputs] = useState(false);

  const InputsElements: {
    name: string;
    controlId: string;
    label: string;
    inputType: string;
    placeholder: string;
    value: string;
    defaultValue?: string;
    setFunction: React.Dispatch<React.SetStateAction<string>>;
  }[] = [
    {
      name: "diameter",
      controlId: "diameter",
      label: "d (mm)",
      inputType: "number",
      placeholder: "Diameter in milimeters",
      value: d,
      setFunction: setD,
    },
    {
      name: "thickness",
      controlId: "thickness",
      label: "t (mm)",
      inputType: "number",
      placeholder: "Thickness in milimeters",
      value: t,
      setFunction: setT,
    },
    {
      name: "quantity",
      controlId: "quantity",
      label: "qty",
      inputType: "number",
      placeholder: "Quantity",
      value: qty,
      setFunction: setQty,
    },
    {
      name: "length",
      controlId: "length",
      label: "length (mm)",
      inputType: "number",
      placeholder: "Section length (mm)",
      value: length,
      setFunction: setLength,
    },
  ];

  const Calculate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent
  ) => {
    e.preventDefault();
    if (+d > 0 && +t > 0 && +qty > 0 && +length > 0) {
      if (+d <= 2 * +t) {
        setErrorText("Thickness cannot bigger or equal than radius!");
      } else {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/builtup-app/chs`, {
            d: +d,
            t: +t,
            qty: +qty,
            length: +length,
          })
          .then(function (response) {
            setFetchData(response.data);
            setShowOutputs(true);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {
      setErrorText("Please enter positive inputs...");
    }
  };

  return (
    <Container className="row my-3">
      <VectorCHS height="300px" />
      <Container className="col-lg-6 input-container my-3">
        {InputsElements.map((elem, ind) => (
          <InputElement
            key={"inp_" + ind}
            controlId={elem.controlId}
            label={elem.label}
            inputType={elem.inputType}
            placeholder={elem.placeholder}
            value={elem.value}
            setFunction={elem.setFunction}
            setShowOutputs={setShowOutputs}
            setErrorText={setErrorText}
          />
        ))}
        <p className="error-text">{errorText}</p>
        <Button
          className="btn-lg"
          onClick={(e) => {
            Calculate(e);
          }}
        >
          Calculate
        </Button>
      </Container>
      <Container className="col-lg-6 my-3 text-center">
        {showOutputs ? (
          <Table striped>
            <tbody>
              <tr className="tr-00">
                <td>
                  <b>Profile Name:</b>
                </td>
                <td>
                  <b>{"CHS" + d + "X" + t + "-" + length + " #" + qty}</b>
                </td>
                <td>
                  <b>Unit</b>
                </td>
              </tr>
              <tr className="tr-01">
                <td>
                  <b>Unit Weight (G):</b>
                </td>
                <td>
                  <b>{fetchData.g}</b>
                </td>
                <td>
                  <b>[kg/m]</b>
                </td>
              </tr>
              <tr className="tr-02">
                <td>Surface Area (U):</td>
                <td>{fetchData.u}</td>
                <td>[m2/m]</td>
              </tr>
              <tr className="tr-03">
                <td>Sectional Area (A):</td>
                <td>{fetchData.a}</td>
                <td>[cm2]</td>
              </tr>
              <tr className="tr-04">
                <td>Moment of Inertia (I):</td>
                <td>{fetchData.i}</td>
                <td>[cm4]</td>
              </tr>
              <tr className="tr-05">
                <td>Section Modulus (S):</td>
                <td>{fetchData.s}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-06">
                <td>Plastic Modulus (Z):</td>
                <td>{fetchData.z}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-07">
                <td>
                  <b>Peice Weight:</b>
                </td>
                <td>
                  <b>{fetchData.pieceWeight}</b>
                </td>
                <td>
                  <b>[kg]</b>
                </td>
              </tr>
              <tr className="tr-08">
                <td>
                  <b>Total Weight:</b>
                </td>
                <td>
                  <b>{fetchData.totalWeight}</b>
                </td>
                <td>
                  <b>[kg]</b>
                </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <p style={{ color: "$colorPrimary" }}>
            Please enter geometric properties and calculate to see corresponding
            section values.
          </p>
        )}
      </Container>
    </Container>
  );
};

export default CHSCalculation;
