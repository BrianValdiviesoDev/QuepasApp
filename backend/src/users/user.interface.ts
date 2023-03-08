import { Auth } from "../auth/auth.interface";

export interface User extends Auth {
  id: string,
  name: string;
  cdate: Date,
  active: Boolean,
}
