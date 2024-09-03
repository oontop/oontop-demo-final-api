import express, { json } from 'express';
import logger from './middleware/logger';
import notFound from './middleware/not-found';
import connect from './db/connection';
import configDevEnv from '../config';
import errorHandler from './middleware/error-handler';
import { Logger } from './logs/logger';
import cors from 'cors';
import { patientsRouter } from './routes/patients';

import { mergedpatientsRouter } from './routes/mergedpatients';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerConfig';


configDevEnv();


connect()
Logger.log("Express.js server with database connection, logging, error handling, and routes for users and patients, then starts it on port 8080.")
const app = express();

app.use(json());
app.use(logger);

app.use(cors({ origin: "*" }))


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use("/api/v1/patients", patientsRouter);
app.use("/api/v1/merged-patients", mergedpatientsRouter);

app.use(express.static("public"))

app.use(errorHandler);
app.use(notFound);

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080")
    console.log(`App is running in ${process.env.NODE_ENV} mode`);
    console.log(`Swagger docs available at http://localhost:8080/api-docs`);
});