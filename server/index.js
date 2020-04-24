
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require("body-parser");
const massive = require('massive');
const app = express();
const ac = require('./controllers/authController');
const sc = require('./controllers/studentController');
const jc = require('./controllers/jobController');
const ec = require('./controllers/employerController');

const corsConfig = {
  origin: 'http://localhost:8081',
  credentials: true,
};

app.use(cors(corsConfig))

console.log(process.env.SESSION_SECRET)

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    proxy: true,
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);


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


app.post('/api/login', ac.login);

app.get('/api/matched-jobs/:id', jc.getJobs);
app.post('/api/apply-job', jc.applyJobs);

app.get('/api/candidates/:id', ec.getCandidates);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});