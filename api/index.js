const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = require('./swagger.config.js');

const publicRoutes = require('./routes/public');
const { verifyToken } = require('./middleware/verifyToken');
const userRoutes = require('./routes/user');

const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

const specs = swaggerJsdoc(options);

app.use("/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

mongoose.connect(MONGO_URL)
    .catch((error) => {
        throw new Error(error.message);
    });

app.use(publicRoutes);
app.use(verifyToken);
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});