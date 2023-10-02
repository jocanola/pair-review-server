
const express = require("express");
const {submitAss,
  getSubsWithId,
  reviewSubmission} = require("../controllers/submissionController")
const router = express.Router();

router.post("/", function(req, res){
  submitAss(req, res)
} );

router.get("/:id", function(req, res){ getSubsWithId(req, res)});

router.put("/review/:id",  function(req, res){ reviewSubmission(req, res)});

module.exports = router;
