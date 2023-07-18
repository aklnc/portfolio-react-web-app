import { Router, Request, Response, NextFunction } from "express";

const LShapedSummary = require('../database/L-Shaped-Summary.json')
const CHSSummary = require('../database/CHS-Summary.json')
const IShapedSummary = require('../database/I-Shaped-Summary.json')
const RHSSummary = require('../database/RHS-Summary.json')
const UShapedSummary = require('../database/U-Shaped-Summary.json')

const router = Router();

router.get("/l-shaped", (req: Request, res: Response, next: NextFunction) => {
  const responseData = []
  for (const elem of LShapedSummary) {
    const {data, vector, definition, ...rest} = elem
    responseData.push(rest)
  }
  res.json(responseData);
});

router.get("/chs", (req: Request, res: Response, next: NextFunction) => {
  const responseData = []
  for (const elem of CHSSummary) {
    const {data, vector, definition, ...rest} = elem
    responseData.push(rest)
  }
  res.json(responseData);
});

router.get("/i-shaped", (req: Request, res: Response, next: NextFunction) => {
  const responseData = []
  for (const elem of IShapedSummary) {
    const {data, vector, definition, ...rest} = elem
    responseData.push(rest)
  }
  res.json(responseData);
});

router.get("/rhs", (req: Request, res: Response, next: NextFunction) => {
  const responseData = []
  for (const elem of RHSSummary) {
    const {data, vector, definition, ...rest} = elem
    responseData.push(rest)
  }
  res.json(responseData);
});

router.get("/u-shaped", (req: Request, res: Response, next: NextFunction) => {
  const responseData = []
  for (const elem of UShapedSummary) {
    const {data, vector, definition, ...rest} = elem
    responseData.push(rest)
  }
  res.json(responseData);
});

export default router;
