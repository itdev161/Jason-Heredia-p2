import express from 'express';
import connectDatabase from './config/db';

// Initialize express App
const app = express();

// Connect database
connectDatabase();

// API endpoints
app.get('/', (req, res) => 
    res.send('http get request sent to root api endpoint')
);

// Conection Listener
app.listen(3000, () => console.log(`Express server running on port 3000`));