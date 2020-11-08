const redisOp = require('../redis');
const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/keys')

exports.index = async (req, res) => {
    const { googleId, name, imageUrl, email } = req.body;
    try {
        const findUser = await User.findOne({ email: email })
        if (findUser) {
            bcrypt.compare(googleId, findUser.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        isValid: "false"
                    });
                } else if (result) {
                    const token = jwt.sign({
                        email: findUser.email,
                        user: findUser._id
                    },
                        key.jwtKeys,
                        {
                            expiresIn: "5h"
                        });
                    return res.status(200).json({
                        isValid: "true",
                        token: token,
                        usrid: findUser._id,
                        username: findUser.username
                    });
                } else {
                    return res.status(401).json({
                        isValid: "false"
                    });
                }
            });
        } else {
            bcrypt.hash(googleId, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        password: hash,
                        email: email,
                        username: name,
                        imageUrl: imageUrl,
                        created_at: new Date()
                    });
                    const userAdd = await user.save();

                    const token = jwt.sign({
                        email: userAdd.email,
                        user: userAdd._id
                    },
                        key.jwtKeys,
                        {
                            expiresIn: "5h"
                        });
                    return res.status(200).json({
                        isValid: "true",
                        token: token,
                        usrid: userAdd._id,
                        username : userAdd.username
                    });
                }
            });

        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ meesage: "Error Api" });
    }
}

exports.getUser = async (req, res) => {
    const { usrid } = req.body;
    try {
        const findUser = await User.findOne({ _id: usrid })
        if (findUser) {
            const user = {
                name: findUser.username,
                email: findUser.email,
                image: findUser.imageUrl,
                created_at: findUser.created_at
            }
            const dataUser = {
                "data": user
            }
            jsonData = JSON.stringify(dataUser)
            const data = JSON.parse(jsonData)
            res.status(200).json(data);
        } else {
            return res.status(401).send({
                error: "Unauthorized"
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ meesage: "Error Api" });
    }
}