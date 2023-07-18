import React, { useEffect, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

import VectorCHS from "../vectors/Profile Converter Application/chs";
import VectorCShaped from "../vectors/Profile Converter Application/c-shaped";
import VectorIShaped from "../vectors/Profile Converter Application/i-shaped";
import VectorLShaped from "../vectors/Profile Converter Application/l-shaped";
import VectorRHS from "../vectors/Profile Converter Application/rhs";
import VectorRod from "../vectors/Profile Converter Application/rod";
import VectorUShaped from "../vectors/Profile Converter Application/u-shaped";
import VectorPlate from "../vectors/Profile Converter Application/plate";

import CShapedCalculation from "../components/Profile Converter Application/CShapedCalculation";
import CHSCalculation from "../components/Profile Converter Application/CHSCalculation";
import IShapedCalculation from "../components/Profile Converter Application/IShapedCalculation";
import LShapedCalculation from "../components/Profile Converter Application/LShapedCalculation";
import PlateCalculation from "../components/Profile Converter Application/PlateCalculation";
import RHSCalculation from "../components/Profile Converter Application/RHSCalculation";
import RodCalculation from "../components/Profile Converter Application/RodCalculation";
import UShapedCalculation from "../components/Profile Converter Application/UShapedCalculation";

import "./Converter.scss";

const Converter = () => {
  enum ProfileTypes {
    CSHAPED = "C-Shaped (Cold Formed) Profiles",
    CHS = "Circular Hollow Sections",
    ISHAPED = "I-H Shaped (Built-up) Profiles",
    LSHAPED = "L- Shaped Profiles (Angles)",
    PLATE = "Plates",
    RHS = "Rectangular Hollow Sections",
    ROD = "Circular Bars",
    USHAPED = "U-Shaped (Cold Formed) Profiles",
  }

  const profileHeaders = [
    {
      url: "c-shaped",
      heading: ProfileTypes.CSHAPED,
      calculationElement: <CShapedCalculation />,
    },
    {
      url: "chs",
      heading: ProfileTypes.CHS,
      calculationElement: <CHSCalculation />,
    },
    {
      url: "i-shaped",
      heading: ProfileTypes.ISHAPED,
      calculationElement: <IShapedCalculation />,
    },
    {
      url: "l-shaped",
      heading: ProfileTypes.LSHAPED,
      calculationElement: <LShapedCalculation />,
    },
    {
      url: "plate",
      heading: ProfileTypes.PLATE,
      calculationElement: <PlateCalculation />,
    },
    {
      url: "rhs",
      heading: ProfileTypes.RHS,
      calculationElement: <RHSCalculation />,
    },
    {
      url: "rod",
      heading: ProfileTypes.ROD,
      calculationElement: <RodCalculation />,
    },
    {
      url: "u-shaped",
      heading: ProfileTypes.USHAPED,
      calculationElement: <UShapedCalculation />,
    },
  ];

  const profileType = useParams().profileType!;

  const [urlProps, setUrlProps] = useState({
    heading: "",
    calculationElement: <></>,
  });

  useEffect(() => {
    for (const elem of profileHeaders)
      if (profileType === elem.url) {
        setUrlProps({
          heading: elem.heading,
          calculationElement: elem.calculationElement,
        });
        break;
      }
  }, [profileType]);

  const converterNav = [
    { element: <VectorLShaped height="100px" />, url: "/converter/l-shaped" },
    { element: <VectorIShaped height="100px" />, url: "/converter/i-shaped" },
    { element: <VectorCHS height="100px" />, url: "/converter/chs" },
    { element: <VectorRHS height="100px" />, url: "/converter/rhs" },
    { element: <VectorUShaped height="100px" />, url: "/converter/u-shaped" },
    { element: <VectorCShaped height="100px" />, url: "/converter/c-shaped" },
    { element: <VectorRod height="100px" />, url: "/converter/rod" },
    { element: <VectorPlate height="100px" />, url: "/converter/plate" },
  ];

  return (
    <React.Fragment>
      <Container className="row mx-auto py-3">
        {converterNav.map((elem, ind) => (
          <Link
            key={ind}
            to={elem.url}
            className={
              elem.url.split("/")[2] === profileType
                ? "converter-nav-item mx-auto px-2 active-nav"
                : "converter-nav-item mx-auto px-2"
            }
          >
            {elem.element}
          </Link>
        ))}
      </Container>
      <hr className="m-0" />
      <Container className="my-3">
        <h1>{urlProps.heading}</h1>
        {urlProps.calculationElement}
      </Container>
      <hr />
      {
        (profileType !== "plate" && profileType !== "rod" && profileType !== "c-shaped") ? (
          <Alert className="database-informer">
            You can go to standards under database section. Or shortly <Link to={"/database/"+profileType}>Standard Sections</Link> to see standard sections.
            The database is prepared for international regions and respective standards.
          </Alert>
          ) : (
            <Alert className="database-informer">
              The database for this section type is not available for now...
            </Alert>
            )
      }
    </React.Fragment>
  );
};

export default Converter;
