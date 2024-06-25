const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const participantController = require('../controllers/participantController');


console.log("router loaded");

// router.get("/:id", homeController.home);



router.post("/host", participantController.addHost);
router.post("/slot", participantController.addSlot);
router.post("/slot/request", participantController.requestForSlot);
router.get("/slots", participantController.getAvailableSlots);

module.exports = router;