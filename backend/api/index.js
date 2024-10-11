import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import appRoutes from "../src/routes/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// app route
app.use(appRoutes);

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`);
});
