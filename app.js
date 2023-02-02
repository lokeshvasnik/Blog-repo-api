// Import the express module
import express from 'express';
// The app variable has all the methods of the express module
const app = express();

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
