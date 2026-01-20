import dotenv from "dotenv";
dotenv.config();

const requiredVars = ["PORT", "DB_URL", "BCRYPT_SALT_ROUNDS", "JWT_SECRET"];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required env variable: ${key}`);
  }
});

export const envVars = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
  JWT_SECRET: process.env.JWT_SECRET,
};
