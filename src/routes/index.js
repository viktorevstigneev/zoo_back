const express = require('express');

const user = require('./user');
const people = require('./people');
const music = require('./Music')
const banner = require('./banner');

const router = express();

router.use(user);
router.use(people);
router.use(music);
router.use(banner);

module.exports = router;
