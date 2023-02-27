const express = require('express');
const router = express.Router();
const newController = require('../../src/app/controlers/NewControler');

router.use('/:slug', newController.show);
router.use('/', newController.index);

module.exports = router;
