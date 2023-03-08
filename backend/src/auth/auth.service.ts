import { Auth } from "./auth.interface";
import UserModel from "../users/user.schema";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const loginUser = async (auth: Auth) => {
  const checkIs = await UserModel.findOne({ email:auth.email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //TODO el encriptado!
  const isCorrect = await verified(auth.password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken({
    email: checkIs.email
  });
  return token;
};

export { loginUser };