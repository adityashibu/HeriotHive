const express = require('express');
const app = express();

app.get('/test', (req, res,) => {
    res.json({ message: 'Hello World!' });
});

app.post('/register', (req, res) => {

});

app.listen(4000);

// OgWTYoJzzKJVH9av