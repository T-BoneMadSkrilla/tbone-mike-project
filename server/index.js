
require('dotenv').config({path: '../.env'});
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require("body-parser");
const massive = require('massive');
const app = express();
const ac = require('./controllers/authController');
const sc = require('./controllers/studentController');
const jc = require('./controllers/jobController');

const corsConfig = {
  origin: 'http://localhost:8081',
  credentials: true,
};

app.use(cors(corsConfig))

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
      httpOnly:true,
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

app.get('/', function(req, res){
  if(req.session.page_views){
     req.session.page_views++;
     req.session.user ="Tyler"
     res.send("Hi " + req.session.user + " you have visited this page "+ req.session.page_views + " times");
  } else {
     req.session.page_views = 1;
     res.send("Welcome to this page for the first time!");
  }
});


app.post('/api/login', ac.login);

app.get('/api/matched-jobs/:id', jc.getJobs);
app.post('/api/apply-job', jc.applyJobs);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});