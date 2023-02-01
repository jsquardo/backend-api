/*  This import is used to resolve path aliases, since ts configuration is not enough for the built JS */
import "./customImports";

import app from "@root/app";

// Define the router with the /api/v1 prefix

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${process.env.PORT || 5000}/api/v1`
  )
);
