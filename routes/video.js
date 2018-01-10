var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/video-ctrl');

/* GET video listing. */
router.get('/', (req, res, next) => {
    ctrl.init(req, res, next);
    res.render('video', { title: 'Video' });
});

module.exports = router;