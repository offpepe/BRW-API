const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const integrantsEndPoints = require('./routes/integrants');
const app = express();
const port = 3001

app.use(cors());
app.use(bodyParser.json());

app.use('/', integrantsEndPoints);

app.listen(port, () => console.log(`BRW API is running on ${port}`));