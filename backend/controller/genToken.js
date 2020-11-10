const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/keys')

module.exports = {
   async gen_token(req, res) {
      const { password } = req.body;
      try {
         bcrypt.compare(password, key.pws_bcrypt_static, (err, result) => {
            if (err) {
               return res.status(401).json({
                  isValid: "false"
               });
            } else if (result) {
               //no exp
               const token = jwt.sign({
                  pws : password
               },
                  key.jwtKeys);
               return res.status(200).json({
                  isValid: "true",
                  token: token,
               });
            } else {
               return res.status(401).json({
                  isValid: "false"
               });
            }
         });

      } catch (err) {
         res.send({
            error: err
         });
      }
   },

};