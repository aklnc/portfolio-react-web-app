import React, { useState } from "react";
import axios from "axios";
import { Container, Button, Table } from "react-bootstrap";

import VectorIShaped from "../../vectors/Profile Converter Application/i-shaped";

import InputElement from "./InputElement";
import "./Calculation.scss";

const IShapedCalculation = () => {
  /*interface IShapedInput {
    h: number;
    b: number;
    tw: number;
    tf: number;
    qty: number;
    length: number;
  }*/

  interface IShapedOutput {
    g: number;
    u: number;
    a: number;
    iy: number;
    iz: number;
    sy: number;
    sz: number;
    zy: number;
    zz: number;
    pieceWeight: number;
    totalWeight: number;
  }

  // Inputs
  const [h, setH] = useState("");
  const [b, setB] = useState("");
  const [tw, setTw] = useState("");
  const [tf, setTf] = useState("");
  const [qty, setQty] = useState("1");
  const [length, setLength] = useState("1000");

  const [errorText, setErrorText] = useState("");

  // Outputs
  const [fetchData, setFetchData]: [
    IShapedOutput,
    React.Dispatch<React.SetStateAction<IShapedOutput>>
  ] = useState({
    g: 0,
    u: 0,
    a: 0,
    iy: 0,
    iz: 0,
    sy: 0,
    sz: 0,
    zy: 0,
    zz: 0,
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
      name: "height",
      controlId: "height",
      label: "h (mm)",
      inputType: "number",
      placeholder: "Height in milimeters",
      value: h,
      setFunction: setH,
    },
    {
      name: "width",
      controlId: "width",
      label: "b (mm)",
      inputType: "number",
      placeholder: "Width in milimeters",
      value: b,
      setFunction: setB,
    },
    {
      name: "thicknessw",
      controlId: "thicknessw",
      label: "tw (mm)",
      inputType: "number",
      placeholder: "Web thickness in milimeters",
      value: tw,
      setFunction: setTw,
    },
    {
      name: "thicknessf",
      controlId: "thicknessf",
      label: "tf (mm)",
      inputType: "number",
      placeholder: "Flange thickness in milimeters",
      value: tf,
      setFunction: setTf,
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

  const Calculate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (+h > 0 && +b > 0 && +tw > 0 && +tf > 0 && +qty > 0 && +length > 0) {
      if (+h <= 2 * +tf || +b <= +tw) {
        setErrorText("Thickness cannot bigger or equal than other dimensions!");
      } else {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/builtup-app/i-shaped`, {
            h: +h,
            b: +b,
            tw: +tw,
            tf: +tf,
            qty: +qty,
            length: +length,
          })
          .then(function (response) {
            setFetchData(response.data);
            setShowOutputs(true);
            console.log(response);
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
      <VectorIShaped height="300px" />
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
          <Table striped className="output-table">
            <tbody>
              <tr className="tr-00">
                <td>
                  <b>Profile Name:</b>
                </td>
                <td>
                  <b>
                    {"PG" +
                      h +
                      "X" +
                      b +
                      "X" +
                      tw +
                      "X" +
                      tf +
                      "-" +
                      length +
                      " #" +
                      qty}
                  </b>
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
              <tr className="tr-06">
                <td>Moment of Inertia (Iy):</td>
                <td>{fetchData.iy}</td>
                <td>[cm4]</td>
              </tr>
              <tr className="tr-07">
                <td>Moment of Inertia (Iz):</td>
                <td>{fetchData.iz}</td>
                <td>[cm4]</td>
              </tr>
              <tr className="tr-07">
                <td>Section Mudulus (Sy):</td>
                <td>{fetchData.sy}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-07">
                <td>Section Mudulus (Sz):</td>
                <td>{fetchData.sz}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-07">
                <td>Plastic Modulus (Zy):</td>
                <td>{fetchData.zy}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-07">
                <td>Plastic Modulus (Zz):</td>
                <td>{fetchData.zz}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-08">
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
              <tr className="tr-09">
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

export default IShapedCalculation;
