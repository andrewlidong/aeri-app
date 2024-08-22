const express = require('express')
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/aeri', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send('Aeri API');
});

app.listen(PORT, () => console.log('Server running on port $PORT'));