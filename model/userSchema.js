// Use moongose to create a schema very easily
import mongoose from 'mongoose';

// Create a schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

// Now sending this schema to the database through the model method
export default mongoose.model('User', userSchema);
// Notice the User is the name of the collection in the database
