let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let setting = require('../models/setting-schema.js');

router.route('/new').post(async (req, res, next) => {
    setting.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/settings').get((req, res) => {
    setting.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/settings/:id').get((req, res) => {
    setting.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;