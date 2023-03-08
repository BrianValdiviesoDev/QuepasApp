import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string):Promise<String> => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const verified = async (pass: string, passHash: string):Promise<Boolean> => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verified };