const express = require("express");

const router = express.Router();

// Import item-related actions
const { browse, read} = require("../../../controllers/programActions");



// Route to get a list of items
router.get("/", browse);
router.get("/:id", read); // Complete path is: /api/programs/:id

/* ************************************************************************* */

module.exports = router;
