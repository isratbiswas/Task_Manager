import dotenv from "dotenv";
dotenv.config();

const requiredVars = ["PORT", "DB_URL"];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required env variable: ${key}`);
  }
});

export const envVars = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
