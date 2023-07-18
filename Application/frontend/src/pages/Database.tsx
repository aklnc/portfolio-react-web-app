import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

import './Database.scss'

const Database = () => {
  const [heading, setHeading] = useState("");
  const [database, setDatabase] = useState([
    {
      id: "",
      name: "",
      standard: "",
      region: "",
      shape: "",
      manufacturing_type: "",
      definition: "",
      vector: "",
    },
  ]);
  const [sortedDatabase, setsortedDatabase] = useState([
    {
      id: "",
      name: "",
      standard: "",
      region: "",
      shape: "",
      manufacturing_type: "",
      definition: "",
      vector: "",
    },
  ]);
  const [orderHead, setOrderHead] = useState("name");
  const [orderType, setOrderType] = useState("asc");

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

  const profileType = useParams().profileType!;
  const navigate = useNavigate()

  useEffect(() => {
    for (const elem of headings) {
      if (elem.url === profileType) {
        setHeading(elem.heading);
        document.title = elem.heading
        break;
      }
    }
  }, [profileType]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/database/summary/${profileType}`)
      .then(function (response) {
        setDatabase(response.data);
        setsortedDatabase(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const sort = () => {
      const shortedData = [...database].sort(
        (a: { [key: string]: string }, b: { [key: string]: string }) => {
          if (orderType === "asc") {
            if (a[orderHead] > b[orderHead]) {
              return 1;
            } else if (a[orderHead] < b[orderHead]) {
              return -1;
            } else {
              return 0;
            }
          } else {
            if (a[orderHead] > b[orderHead]) {
              return -1;
            } else if (a[orderHead] < b[orderHead]) {
              return 1;
            } else {
              return 0;
            }
          }
        }
      );
      setsortedDatabase(shortedData);
    };

    sort();
  }, [orderHead, orderType, database]);

  const OrderHandler = (
    e: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (orderHead === id) {
      if (orderType === "asc") {
        setOrderHead(id);
        setOrderType("decs");
      } else {
        setOrderHead(id);
        setOrderType("asc");
      }
    } else {
      setOrderHead(id);
      setOrderType("asc");
    }
  };

  const ClickHandler = (e:React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    e.preventDefault()

    const id = e.currentTarget.id

    navigate(`/database/${profileType}/${id}`)

  }

  return (
    <Container className="my-3">
      <h1>{heading}</h1>
      <Table
        striped
        bordered
        hover
        className="database-table"
      >
        <thead>
          <tr>
            <th
              id="name"
              onClick={(e) => {
                OrderHandler(e);
              }}
            >
              Name
              {orderHead === "name" &&
                (orderType === "asc" ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-z-a"></i>
                ))}
            </th>
            <th
              id="standard"
              onClick={(e) => {
                OrderHandler(e);
              }}
            >
              Standard
              {orderHead === "standard" &&
                (orderType === "asc" ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-z-a"></i>
                ))}
            </th>
            <th
              id="region"
              onClick={(e) => {
                OrderHandler(e);
              }}
            >
              Region
              {orderHead === "region" &&
                (orderType === "asc" ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-z-a"></i>
                ))}
            </th>
            <th
              id="shape"
              onClick={(e) => {
                OrderHandler(e);
              }}
            >
              Shape
              {orderHead === "shape" &&
                (orderType === "asc" ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-z-a"></i>
                ))}
            </th>
            <th
              id="manufacturing_type"
              onClick={(e) => {
                OrderHandler(e);
              }}
            >
              Manufacturing Type
              {orderHead === "manufacturing_type" &&
                (orderType === "asc" ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down-z-a"></i>
                ))}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedDatabase.map((elem, _) => (
            <tr key={elem.id} id={elem.id} onClick={(e) => {ClickHandler(e)}}>
              <td>{elem.name}</td>
              <td>{elem.standard}</td>
              <td>{elem.region}</td>
              <td>{elem.shape}</td>
              <td>{elem.manufacturing_type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Database;
