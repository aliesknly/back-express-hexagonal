import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { enviroments } from "../utilities";

import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  userId: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401).send("No token provided.");
  }

  try {
    const decodedToken = jwt.verify(
      token,
      `${enviroments.JWT_SECRET}`
    ) as CustomJwtPayload;
    console.log("decodedToken", decodedToken);
    req.userId = decodedToken.userId;
    next();
  } catch (e) {
    return res.status(401).send("Invalid token.");
  }
};
