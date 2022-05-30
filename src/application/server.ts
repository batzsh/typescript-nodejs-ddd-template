import express from 'express';

import swaggerUi from "swagger-ui-express";
import swaggerFile from "@docs/swagger.json";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (request, response) => response.json({ message: 'hello world' }));

app.listen(3333, () => {
  console.log("🚀 Server is running on port 3333...");
});
