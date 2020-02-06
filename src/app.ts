import express, {Application} from 'express';
import {applicationRouter} from "./route/application_router";
import {itemsRouter} from "./route/items_router";

const cors = require("cors");

let app: Application = express();

// Set up middleware json parsing
app.use(express.json());

// Allow Cors
app.use(cors);

// Set up routing for application
app.use('/', applicationRouter);

// Configure router for `/items` endpoint.
app.use('/items', itemsRouter);


// Sets the port for the application.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`));

