
const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const {
    newEntry,getEntries
  } = require("../controllers/RegisterController");


router.post(
    "/entry/new",
    upload.none(),
    newEntry
  );
router.get("/entries", getEntries);

module.exports = router;