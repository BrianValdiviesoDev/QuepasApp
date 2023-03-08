import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "123456789";

const generateToken = (data: object) => {
  const jwt = sign( data , JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };