const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Import your `handle` function
// const { handle } = require('./path-to-your-handle-function');

const app = express();

// Use bodyParser to parse JSON request bodies
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    try {
      res.sendFile(path.join(__dirname, '/index.html'));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/graphql', async (req, res) => {
    try {
        // const result = await handle(req.body);
        const result = { "a": "b" };
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(4000, "0.0.0.0", () => console.log('Server running on http://localhost:4000/graphql'));

