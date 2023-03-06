/**
 * This file contains all the logic and connects with DB
 */

import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { createUser } from "./user.service";
const getUser = async (req: Request, res: Response) => {
  try {
    res.send({ data: "mis usuarios" });
  } catch (error) {
    handleHttp(res, "ERROR_GET_USER");
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_USERS");
  }
};

const postUser = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.send(newUser);
  } catch (error) {
    handleHttp(res, "ERROR_POST_USER");
  }
};

const putUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_PUT_USER");
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_USER");
  }
};

export { getUser, getUsers, postUser, putUser, deleteUser };
