// Importing dependencies and methods from another files
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 
// imported routes for user authentication and gadgets 
const gadgetRoutes = require('./routes/gadgetRoutes');
const authRoutes = require('./routes/authRoutes');
// imported database
const { sequelize } = require('./config/database');
// initialised app 
const app = express();
// imported the port from env for better security
const port = process.env.PORT

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/gadgets', gadgetRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Gadget API! 🚀</h1>
        <p><strong>API Postman Documentation:</strong> <a href="https://documenter.getpostman.com/view/39755888/2sAYdipAQH" target="_blank">View Documentation</a></p>
        <p><strong>GitHub Repository:</strong> <a href="https://github.com/abrahamjeron/IMF-Gadget-API" target="_blank">View on GitHub</a></p>
        <p><strong>Deployed API:</strong> <a href="https://imf-gadget-api-hvxk.onrender.com" target="_blank">Access API</a></p>
    `);
});


// server setup 
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to Supabase PostgreSQL ');

        app.listen(port, () => console.log(`Server running`));
    } catch (error) {
        console.error('Database connection error ', error);
        process.exit(1); 
    }
};

startServer();
