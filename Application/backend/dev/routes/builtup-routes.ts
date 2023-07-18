import { Router, Request, Response, NextFunction } from "express";

import ConvertCHS from "../builtup-app/CHS";
import ConvertCShaped from "../builtup-app/CShaped";
import ConvertIShaped from "../builtup-app/IShaped";
import ConvertLShaped from "../builtup-app/LShaped";
import ConvertPlate from "../builtup-app/Plate";
import ConvertRHS from "../builtup-app/RHS";
import ConvertRod from "../builtup-app/Rod";
import ConvertUShaped from "../builtup-app/UShaped";

const router = Router();

router.post("/chs", (req: Request, res: Response, next: NextFunction) => {
  res.json(ConvertCHS(req.body));
});

router.post("/c-shaped", (req: Request, res: Response, next: NextFunction) => {
  res.json(ConvertCShaped(req.body));
});

router.post("/i-shaped", (req: Request, res: Response, next: NextFunction) => {
  res.json(ConvertIShaped(req.body));
});

router.post("/l-shaped", (req: Request, res: Response, next: NextFunction) => {
  res.json(ConvertLShaped(req.body));
});

router.post("/plate", (req: Request, res: Response, next: NextFunction) => {
  res.json(ConvertPlate(req.body));
});

router.post("/rhs", (req: Request, res: Response, next: NextFunction) => {
  res.json(ConvertRHS(req.body));
});

router.post("/rod", (req: Request, res: Response, next: NextFunction) => {
  res.json(ConvertRod(req.body));
});

router.post("/u-shaped", (req: Request, res: Response, next: NextFunction) => {
    res.json(ConvertUShaped(req.body));
  });

export default router;
