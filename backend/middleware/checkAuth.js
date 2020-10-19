const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const key = require('../config/keys');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

module.exports = app.use((req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token === null) {
      res.status(401).json({  
        message: 'Unauthorized'
      });
    } else {
      jwt.verify(token, key.jwtKeys, (err, decode) => {
        if (err) {
          res.status(401).json({
            message: 'token invalid'
          });
        } else {
          req.token = decode;
          next();
        }
      });
    }
  } catch (error) {
    res.status(401).json({
      message: 'Auth failed jwt not verify'
    });
  }
});