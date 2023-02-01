import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

import router from "./routes";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());

// Define the router with the /api/v1 prefix
app.use("/api/v1", router);

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${process.env.PORT || 5000}/api/v1`
  )
);
