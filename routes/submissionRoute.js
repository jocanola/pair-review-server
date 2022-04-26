
const express = require("express");
const {submitAss,
  getSubsWithId,
  reviewSubmission} = require("../controllers/submissionController")
const router = express.Router();

router.post("/", submitAss);

router.get("/:id", getSubsWithId);

router.put("/review/:id", reviewSubmission);

module.exports = router;
