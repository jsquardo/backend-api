/*  This import is used to resolve path aliases, since ts configuration is not enough for the built JS */
import "./customImports";

import app from "@root/app";
import { config } from "@root/app.config";
import logger from "@services/logger";

const { port } = config;

// Define the router with the /api/v1 prefix

app.listen(process.env.PORT || 5000, () => console.log(`🚀 Server ready on ${port}:/api/v1`));
