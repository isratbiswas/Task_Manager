import mongoose from "mongoose";
import { envVars } from "./app/config/env.js";
import app from "./app.js";

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("connect to DB");
    app.listen(envVars.PORT, () => {
      console.log(`server is listening ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
