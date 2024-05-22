const express = require("express");

const router = express.Router();

// Import item-related actions
const { browse} = require("../../../controllers/programActions");

// Route to get a list of items
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
