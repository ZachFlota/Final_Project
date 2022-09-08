let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let climax = require('../models/plot/climax-schema');
let conflict = require('../models/plot/conflict-schema');
let exposition = require('../models/plot/exposition-schema');
let fallingAction = require('../models/plot/fallingAction-schema');
let risingAction = require('../models/plot/risingAction-schema');
let resolution = require('../models/plot/resolution-schema');

//climax routes
router.route('/new/climax').post(async (req, res, next) => {
    climax.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/climax').get((req, res) => {
    climax.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/climax/:id').get((req, res) => {
    climax.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/climax/update/:id').put((req, res, next) => {
    climax.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            
        }
    })
})

router.route('/climax/delete/:id').delete((req, res, next) => {
    climax.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

//conflict 
router.route('/new/conflict').post(async (req, res, next) => {
    conflict.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/conflict').get((req, res) => {
    conflict.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/conflict/:id').get((req, res) => {
    conflict.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/conflict/update/:id').put((req, res, next) => {
    conflict.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            
        }
    })
})

router.route('/conflict/delete/:id').delete((req, res, next) => {
    conflict.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

//exposition routes
router.route('/new/exposition').post(async (req, res, next) => {
    exposition.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/exposition').get((req, res) => {
    exposition.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/exposition/:id').get((req, res) => {
    exposition.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/exposition/update/:id').put((req, res, next) => {
    exposition.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            
        }
    })
})

router.route('/exposition/delete/:id').delete((req, res, next) => {
    exposition.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

//falling action routes
router.route('/new/fallingAction').post(async (req, res, next) => {
    fallingAction.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/fallingAction').get((req, res) => {
    fallingAction.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/fallingAction/:id').get((req, res) => {
    fallingAction.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/fallingAction/update/:id').put((req, res, next) => {
    fallingAction.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            
        }
    })
})

router.route('/fallingAction/delete/:id').delete((req, res, next) => {
    fallingAction.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

//rising action routes
router.route('/new/risingAction').post(async (req, res, next) => {
    risingAction.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/risingAction').get((req, res) => {
    risingAction.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/risingAction/:id').get((req, res) => {
    risingAction.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/risingAction/update/:id').put((req, res, next) => {
    risingAction.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            
        }
    })
})

router.route('/risingAction/delete/:id').delete((req, res, next) => {
    risingAction.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


//resolution routes
router.route('/new/resolution').post(async (req, res, next) => {
    resolution.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/resolution').get((req, res) => {
    resolution.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/resolution/:id').get((req, res) => {
    resolution.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/resolution/update/:id').put((req, res, next) => {
    resolution.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            
        }
    })
})

router.route('/resolution/delete/:id').delete((req, res, next) => {
    resolution.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;