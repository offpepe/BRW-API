const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_req, res) => res.status(200).send('Welcome to BRW API V1'));

app.listen(port, () => console.log(`BRW API is running on ${port}`));