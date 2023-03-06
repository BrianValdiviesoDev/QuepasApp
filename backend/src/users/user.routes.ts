/**
 * This file join request url with a function in controller
 */

import { Router, Request, Response } from "express";
import * as UserController from "./user.controllers";

const userRouter = Router();

userRouter.get("/users", UserController.getUser);

export { userRouter };
