const express = require("express");
const viewController = require("./../Controller/viewController");
const router = express.Router();

router.get('/', viewController.getOverview);

router.get('/movie/:title', viewController.getMovieInfo);

module.exports = router;