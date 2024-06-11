const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://louaychekersassi:iD73tFEUoAc2QAdq@stage.2hafshu.mongodb.net/?retryWrites=true&w=majority&appName=stagemongoose.connect', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/files', require('./routes/files'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
