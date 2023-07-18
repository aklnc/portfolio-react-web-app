import { Router, Request, Response, NextFunction } from "express";
import { readFileSync } from "fs";

const LShapedSummary = require("../database/L-Shaped-Summary.json");
const IShapedSummary = require("../database/I-Shaped-Summary.json");
const CHSSummary = require("../database/CHS-Summary.json");
const RHSSummary = require("../database/RHS-Summary.json");
const UShapedSummary = require("../database/U-Shaped-Summary.json");

const router = Router();

interface ProfileElement {
  material: string;
  h?: number;
  d?: number;
  b?: number;
  t?: number;
  r1?: number;
  r2?: number;
  a?: number;
  ey?: number;
  ez?: number;
  iy?: number;
  iz?: number;
  sy?: number;
  zy?: number;
  g?: number;
  u?: number;
}

// JSON.parse(readFileSync(__dirname + "/../database/RHS-DB.json", 'utf-8'));

router.get(
  "/l-shaped/:dbid",
  (req: Request, res: Response, next: NextFunction) => {
    const dbid = req.params.dbid;
    const dbElement: {
      name: string;
      standard: string;
      region: string;
      shape: string;
      manufacturing_type: string;
      definition: string;
      vector: string;
      tableHeaders: string[];
      elements: ProfileElement[];
    } = {
      name: "",
      standard: "",
      region: "",
      shape: "",
      manufacturing_type: "",
      definition: "",
      vector: "",
      tableHeaders: [],
      elements: [{ material: "" }],
    };

    const summaryElement = LShapedSummary.filter(
      (elem: {
        name: string;
        standard: string;
        region: string;
        shape: string;
        manufacturing_type: string;
        definition: string;
        data: string;
        vector: string;
        id: string;
      }) => {
        return elem.id === dbid;
      }
    )[0];

    const LShapedDB = JSON.parse(readFileSync(__dirname + "/../database/L-Shaped-DB.json", 'utf-8'));

    dbElement.name = summaryElement.name;
    dbElement.standard = summaryElement.standard;
    dbElement.region = summaryElement.region;
    dbElement.shape = summaryElement.shape;
    dbElement.manufacturing_type = summaryElement.manufacturing_type;
    dbElement.definition = summaryElement.definition;
    dbElement.vector = summaryElement.vector;
    dbElement.elements = LShapedDB[summaryElement.data];
    if (dbElement.elements[0].t) {
      dbElement.tableHeaders = [
        "Material",
        "h [mm]",
        "b [mm]",
        "t [mm]",
        "r1 [mm]",
        "r2 [mm]",
        "Area [cm2]",
        "ey [mm]",
        "ez [mm]",
        "Iy [cm4]",
        "Iz [cm4]",
        "G [kg/m]",
        "U [m2/m]",
      ];
    } else
      dbElement.tableHeaders = [
        "Material",
        "h [mm]",
        "b [mm]",
        "th [mm]",
        "tb [mm]",
        "r1 [mm]",
        "r2 [mm]",
        "Area [cm2]",
        "ey [mm]",
        "ez [mm]",
        "Iy [cm4]",
        "Iz [cm4]",
        "G [kg/m]",
        "U [m2/m]",
      ];

    res.json(dbElement);
  }
);

router.get("/chs/:dbid", (req: Request, res: Response, next: NextFunction) => {
  const dbid = req.params.dbid;
  const dbElement: {
    name: string;
    standard: string;
    region: string;
    shape: string;
    manufacturing_type: string;
    definition: string;
    vector: string;
    tableHeaders: string[];
    elements: ProfileElement[];
  } = {
    name: "",
    standard: "",
    region: "",
    shape: "",
    manufacturing_type: "",
    definition: "",
    vector: "",
    tableHeaders: [],
    elements: [{ material: "" }],
  };

  const summaryElement = CHSSummary.filter(
    (elem: {
      name: string;
      standard: string;
      region: string;
      shape: string;
      manufacturing_type: string;
      definition: string;
      data: string;
      vector: string;
      id: string;
    }) => {
      return elem.id === dbid;
    }
  )[0];

  const CHSDB = JSON.parse(readFileSync(__dirname + "/../database/CHS-DB.json", 'utf-8'));
  
  dbElement.name = summaryElement.name;
  dbElement.standard = summaryElement.standard;
  dbElement.region = summaryElement.region;
  dbElement.shape = summaryElement.shape;
  dbElement.manufacturing_type = summaryElement.manufacturing_type;
  dbElement.definition = summaryElement.definition;
  dbElement.vector = summaryElement.vector;
  dbElement.elements = CHSDB[summaryElement.data];

  dbElement.tableHeaders = [
    "Material",
    "d [mm]",
    "t [mm]",
    "a [cm2]",
    "I [cm4]",
    "S [cm3]",
    "Z [cm3]",
    "G [kg/m]",
    "U [m2/m]",
  ];

  res.json(dbElement);
});

router.get(
  "/i-shaped/:dbid",
  (req: Request, res: Response, next: NextFunction) => {
    const dbid = req.params.dbid;
    const dbElement: {
      name: string;
      standard: string;
      region: string;
      shape: string;
      manufacturing_type: string;
      definition: string;
      vector: string;
      tableHeaders: string[];
      elements: ProfileElement[];
    } = {
      name: "",
      standard: "",
      region: "",
      shape: "",
      manufacturing_type: "",
      definition: "",
      vector: "",
      tableHeaders: [],
      elements: [{ material: "" }],
    };

    const summaryElement = IShapedSummary.filter(
      (elem: {
        name: string;
        standard: string;
        region: string;
        shape: string;
        manufacturing_type: string;
        definition: string;
        data: string;
        vector: string;
        id: string;
      }) => {
        return elem.id === dbid;
      }
    )[0];

    const IShapedDB = JSON.parse(readFileSync(__dirname + "/../database/I-Shaped-DB.json", 'utf-8'));
  
    dbElement.name = summaryElement.name;
    dbElement.standard = summaryElement.standard;
    dbElement.region = summaryElement.region;
    dbElement.shape = summaryElement.shape;
    dbElement.manufacturing_type = summaryElement.manufacturing_type;
    dbElement.definition = summaryElement.definition;
    dbElement.vector = summaryElement.vector;
    dbElement.elements = IShapedDB[summaryElement.data];
    if (dbElement.elements[0].b) {
      dbElement.tableHeaders = [
        "Material",
        "h [mm]",
        "b [mm]",
        "tw [mm]",
        "tf [mm]",
        "r1 [mm]",
        "Area [cm2]",
        "Iy [cm4]",
        "Iz [cm4]",
        "Sy [cm3]",
        "Sz [cm3]",
        "Zy [cm3]",
        "Zz [cm3]",
        "G [kg/m]",
        "U [m2/m]",
      ];
    } else
      dbElement.tableHeaders = [
        "Material",
        "h [mm]",
        "bt [mm]",
        "bb [mm]",
        "tw [mm]",
        "tf [mm]",
        "r1 [mm]",
        "Area [cm2]",
        "ez [mm]",
        "Iy [cm4]",
        "Iz [cm4]",
        "Sy [cm3]",
        "Sz [cm3]",
        "Zy [cm3]",
        "Zz [cm3]",
        "G [kg/m]",
        "U [m2/m]",
      ];

    res.json(dbElement);
  }
);

router.get("/rhs/:dbid", (req: Request, res: Response, next: NextFunction) => {
  const dbid = req.params.dbid;
  const dbElement: {
    name: string;
    standard: string;
    region: string;
    shape: string;
    manufacturing_type: string;
    definition: string;
    vector: string;
    tableHeaders: string[];
    elements: ProfileElement[];
  } = {
    name: "",
    standard: "",
    region: "",
    shape: "",
    manufacturing_type: "",
    definition: "",
    vector: "",
    tableHeaders: [],
    elements: [{ material: "" }],
  };

  const summaryElement = RHSSummary.filter(
    (elem: {
      name: string;
      standard: string;
      region: string;
      shape: string;
      manufacturing_type: string;
      definition: string;
      data: string;
      vector: string;
      id: string;
    }) => {
      return elem.id === dbid;
    }
  )[0];

  const RHSDB = JSON.parse(readFileSync(__dirname + "/../database/RHS-DB.json", 'utf-8'));
  
  dbElement.name = summaryElement.name;
  dbElement.standard = summaryElement.standard;
  dbElement.region = summaryElement.region;
  dbElement.shape = summaryElement.shape;
  dbElement.manufacturing_type = summaryElement.manufacturing_type;
  dbElement.definition = summaryElement.definition;
  dbElement.vector = summaryElement.vector;
  dbElement.elements = RHSDB[summaryElement.data];

  if (dbElement.elements[0].b) {
    dbElement.tableHeaders = [
      "Material",
      "h [mm]",
      "b [mm]",
      "t [mm]",
      "r [mm]",
      "Area [cm2]",
      "Iy [cm4]",
      "Iz [cm4]",
      "Sy [cm3]",
      "Sz [cm3]",
      "Zy [cm3]",
      "Zz [cm3]",
      "G [kg/m]",
      "U [m2/m]",
    ];
  } else
    dbElement.tableHeaders = [
      "Material",
      "h [mm]",
      "t [mm]",
      "r [mm]",
      "Area [cm2]",
      "Iy [cm4]",
      "Sy [cm3]",
      "Zy [cm3]",
      "G [kg/m]",
      "U [m2/m]",
    ];

  res.json(dbElement);
});

router.get(
  "/u-shaped/:dbid",
  (req: Request, res: Response, next: NextFunction) => {
    const dbid = req.params.dbid;
    const dbElement: {
      name: string;
      standard: string;
      region: string;
      shape: string;
      manufacturing_type: string;
      definition: string;
      vector: string;
      tableHeaders: string[];
      elements: ProfileElement[];
    } = {
      name: "",
      standard: "",
      region: "",
      shape: "",
      manufacturing_type: "",
      definition: "",
      vector: "",
      tableHeaders: [],
      elements: [{ material: "" }],
    };

    const summaryElement = UShapedSummary.filter(
      (elem: {
        name: string;
        standard: string;
        region: string;
        shape: string;
        manufacturing_type: string;
        definition: string;
        data: string;
        vector: string;
        id: string;
      }) => {
        return elem.id === dbid;
      }
    )[0];

    const UShapedDB = JSON.parse(readFileSync(__dirname + "/../database/U-Shaped-DB.json", 'utf-8'));
  
    dbElement.name = summaryElement.name;
    dbElement.standard = summaryElement.standard;
    dbElement.region = summaryElement.region;
    dbElement.shape = summaryElement.shape;
    dbElement.manufacturing_type = summaryElement.manufacturing_type;
    dbElement.definition = summaryElement.definition;
    dbElement.vector = summaryElement.vector;
    dbElement.elements = UShapedDB[summaryElement.data];

    if (dbElement.elements[0].b) {
      dbElement.tableHeaders = [
        "Material",
        "h [mm]",
        "b [mm]",
        "tw [mm]",
        "tf [mm]",
        "r [mm]",
        "Area [cm2]",
        "ey [mm]",
        "Iy [cm4]",
        "Iz [cm4]",
        "Sy [cm3]",
        "Sz [cm3]",
        "Zy [cm3]",
        "Zz [cm3]",
        "G [kg/m]",
        "U [m2/m]",
      ];
    } else
      dbElement.tableHeaders = [
        "Material",
        "h [mm]",
        "bt [mm]",
        "bb [mm]",
        "tw [mm]",
        "tf [mm]",
        "r [mm]",
        "Area [cm2]",
        "ey [mm]",
        "e< [mm]",
        "Iy [cm4]",
        "Iz [cm4]",
        "Sy [cm3]",
        "Sz [cm3]",
        "Zy [cm3]",
        "Zz [cm3]",
        "G [kg/m]",
        "U [m2/m]",
      ];

    res.json(dbElement);
  }
);

export default router;
