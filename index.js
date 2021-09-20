const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const integrantsEndPoints = require('./routes/integrants');
const errors = require('./middlewares/errors');
const app = express();
const port = 3001

app.use(cors());
app.use(bodyParser.json());

app.use('/', integrantsEndPoints);

app.use(errors.notFound);

app.listen(port, () => console.log(`BRW API is running on ${port}`));