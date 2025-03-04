const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const gadgetRoutes = require('./routes/gadgetRoutes');
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./config/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/gadgets', gadgetRoutes);
app.use('/auth', authRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Connected to Supabase PostgreSQL ✅');
        app.listen(3001, () => console.log('Server running on port 3001'));
    })
    .catch(err => console.error('Database connection error ❌', err))
