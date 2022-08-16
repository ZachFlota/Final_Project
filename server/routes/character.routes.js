let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let character = require('../models/character-schema.js');

router.route('/new').post(async (req, res, next) => {
    character.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/characters').get((req, res) => {
    character.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/characters/:id').get((req, res) => {
    character.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;