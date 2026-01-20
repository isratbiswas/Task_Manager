import bcryptjs from "bcryptjs";
import { User } from "./user.model.js";
import { envVars } from "../../config/env.js";

const createUser = async (payload) => {
  const { email, password, name } = payload;
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcryptjs.hash(
    password,
    Number(envVars.BCRYPT_SALT_ROUNDS),
  );
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  return user;
};
export const UserService = {
  createUser,
};
