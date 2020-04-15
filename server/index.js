const path = require('path');

require('dotenv').config({path: '../.env'});
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const {json} = require('body-parser');
const massive = require('massive');
const sc = require('./controllers/studentController');
const jc = require('./controllers/jobController');

const app = express();
app.use(express.json());
app.use(cors());
app.use(json());

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
connectionString: CONNECTION_STRING,
ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    console.log(app.get('db').listTables());
    console.log('db connected')
})
.catch(err => console.log(err));


app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);

app.get('/api/matched-jobs', jc.getJobs);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});