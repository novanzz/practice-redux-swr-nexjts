const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/keys')

module.exports = {
   async gen_token(req, res) {
      const { password } = req.body;
      try {
         // bcrypt an dari sukasukanovan
         // password = '$2y$12$auIDvS9Ct4//neL4sEv.E.72Ffb5kLxvxxT33Arl2YkCwLos49AHm'
         let pws_bcrypt_static = `$2y$12$Vi1YliDvuf.74ZX3LkeO5.MEka8fXfx8jq7unIOMxzGQ2FYIcoMve`
         bcrypt.compare(password, pws_bcrypt_static, (err, result) => {
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