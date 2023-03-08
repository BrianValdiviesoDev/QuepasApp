import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../auth/request.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwt = req.headers.authorization || "";
    const isUser = verifyToken(jwt);
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = JSON.parse(isUser);
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("SESSION_NO_VALIDADA");
  }
};

export { checkJwt };