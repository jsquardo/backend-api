import router from "@root/app.routes";
/*  This import is used to resolve path aliases, since ts configuration is not enough for the built JS */
import "./customImports";

/*  This import is only used for class-transformer side effects */
import "reflect-metadata";

import express from "express";
import helmet from "helmet";

/*  Express server  */
const app = express();

/*  Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

/*  Routes  */
app.use("/api/v1", router);

export default app;
