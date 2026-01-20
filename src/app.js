import express from "express";
import cors from "cors";
import { router } from "./app/routes/index.js";
import notFound from "./app/middlewares/notFound.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.use(notFound);

export default app;
