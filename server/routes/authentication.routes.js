let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let user = require('../models/user-schema');




router.route('/login').post((req, res, next) => {
    user.findOne({
        where: { email: req.body.email, password: req.body.password }
    })

   
    res.json({ user })
    console.log('IN HERE')
})

module.exports = router;