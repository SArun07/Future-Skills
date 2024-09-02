require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';
const nodeEnv = process.env.NODE_ENV || 'development';

// Middleware for logging HTTP requests
app.use(morgan('combined')); // or 'dev' for concise logging

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
  }));
// Routes
app.use('/', cardRoutes);
// Ping route
app.get('/ping', (req, res) => {
    res.json({ message: 'Server is running!' });
});

// Error handling middleware
app.use(errorHandler);

sequelize.sync()
    .then(() => {
        app.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
            console.log(`Environment: ${nodeEnv}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
