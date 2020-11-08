const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const bodyParse = require('body-parser')
const mongoose = require('mongoose');

const billingRoutes = require('./routes/billing');
const packageRoutes = require('./routes/package');
const authRoutes = require('./routes/user');
const index = require('./routes/index');
const gt = require('./controller/genToken');
const key = require('./config/keys')

//Logging handler error
app.use(morgan('dev'));

//Premission CORS
const siteUrl = [
    "http://127.0.0.1:8080",
    "http://0.0.0.0:8080",
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://127.0.0.1:3002",
    "http://localhost:3002",
    "http://kompas.local",
    undefined
];
  
const corsOptions = {
    origin(origin, callback) {
      if (siteUrl.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200
};
  
app.use(cors(corsOptions));
//e:Premission CORS

app.use(bodyParse.json());

//connect database
mongoose.Promise = global.Promise;
mongoose.connect(key.mongoURI,{
  useUnifiedTopology: true,
  useNewUrlParser:true
});

// Routes
app.use('/api/billing', billingRoutes);
app.use('/api/package', packageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', index);
app.post('/api/gt', gt.gen_token);
  
//handler routes if we pass and none of the routes
app.use((req,res,next)=>{
    const error = new Error ('Not Found');
    error.status= 404;
    //forward request to error
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        message: error.message,
        status: error.status
    });
});


module.exports = app;