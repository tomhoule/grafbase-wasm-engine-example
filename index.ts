const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const grafbase = require('@tomhoule/grafbase-library-engine-experiment');

const config = fs.readFileSync('./config.json', 'utf8')
const engine = new grafbase.GrafbaseGateway(config)


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
        console.log(req.body)
        const result = await engine.execute(JSON.stringify(req.body));
        res.json(JSON.parse(result));
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
});

app.listen(4000, "0.0.0.0", () => console.log('Server running on http://localhost:4000/graphql'));

