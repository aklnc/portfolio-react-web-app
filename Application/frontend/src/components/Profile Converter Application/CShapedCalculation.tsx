import React, { useState } from "react";
import axios from "axios";
import { Container, Button, Table } from "react-bootstrap";

import VectorCShaped from "../../vectors/Profile Converter Application/c-shaped";

import InputElement from "./InputElement";
import "./Calculation.scss";

const CShapedCalculation = () => {
  /*interface CShapedInput {
    h: number;
    b: number;
    c: number;
    t: number;
    qty: number;
    length: number;
  }*/

  interface CShapedOutput {
    g: number;
    u: number;
    a: number;
    yc: number;
    iy: number;
    iz: number;
    sy: number;
    sz: number;
    zy: number;
    zz: number;
    plateWidth: number;
    pieceWeight: number;
    totalWeight: number;
  }

  // Inputs
  const [h, setH] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [t, setT] = useState("");
  const [qty, setQty] = useState("1");
  const [length, setLength] = useState("1000");

  const [errorText, setErrorText] = useState("");

  // Outputs
  const [fetchData, setFetchData]: [
    CShapedOutput,
    React.Dispatch<React.SetStateAction<CShapedOutput>>
  ] = useState({
    g: 0,
    u: 0,
    a: 0,
    yc: 0,
    iy: 0,
    iz: 0,
    sy: 0,
    sz: 0,
    zy: 0,
    zz: 0,
    plateWidth: 0,
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
      name: "lips",
      controlId: "lips",
      label: "c (mm)",
      inputType: "number",
      placeholder: "Lips in milimeters",
      value: c,
      setFunction: setC,
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

  const Calculate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (+h > 0 && +b > 0 && +c > 0 && +t > 0 && +qty > 0 && +length > 0) {
      if (+h <= 2 * +t || +b <= 2 * +t || +c <= +t) {
        setErrorText("Thickness cannot bigger or equal than other dimensions!");
      } else {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/builtup-app/c-shaped`, {
            h: +h,
            b: +b,
            t: +t,
            c: +c,
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
      <VectorCShaped height="300px" />
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
                  <b>
                    {"C" +
                      h +
                      "X" +
                      b +
                      "X" +
                      c +
                      "X" +
                      t +
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
              <tr className="tr-04">
                <td>Eccentricity (ey):</td>
                <td>{fetchData.yc}</td>
                <td>[mm]</td>
              </tr>
              <tr className="tr-04">
                <td>Moment of Inertia (Iy):</td>
                <td>{fetchData.iy}</td>
                <td>[cm4]</td>
              </tr>
              <tr className="tr-04">
                <td>Moment of Inertia (Iz):</td>
                <td>{fetchData.iz}</td>
                <td>[cm4]</td>
              </tr>
              <tr className="tr-05">
                <td>Section Modulus (Sy):</td>
                <td>{fetchData.sy}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-05">
                <td>Section Modulus (Sz):</td>
                <td>{fetchData.sz}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-06">
                <td>Plastic Modulus (Zy):</td>
                <td>{fetchData.zy}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-06">
                <td>Plastic Modulus (Zz):</td>
                <td>{fetchData.zz}</td>
                <td>[cm3]</td>
              </tr>
              <tr className="tr-07">
                <td>
                  <b>Plate Width:</b>
                </td>
                <td>
                  <b>{fetchData.plateWidth}</b>
                </td>
                <td>
                  <b>[mm]</b>
                </td>
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

export default CShapedCalculation;
