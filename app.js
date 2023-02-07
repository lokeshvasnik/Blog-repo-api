// Import the express module
import express from 'express';
import mongoose from 'mongoose';
import userSchema from './model/userSchema.js';
// The app variable has all the methods of the express module
const app = express();

// Middleware to parse the incoming JSON data
app.use(express.json());

// Connect to the MongoDB database
mongoose.set('strictQuery', false);
mongoose.connect(
    'mongodb://localhost:27017',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log('Error connecting to the database');
        } else {
            console.log('Connected to the database');
        }
    }
);

// Define the API endpoints

// Endpoint for the home page
app.get('/', (req, res) => {
    res.send('From the home page');
});

// Endpoint for creating a user
app.post('http://localhost:3000/api', async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log('ello');
        // Create a new user document
        const user = new userSchema({ name, email });

        // Save the user document to the database
        await user.save();

        // Send the response
        res.status(200).send({ message: 'User created' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Something went wrong' });
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
