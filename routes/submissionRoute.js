const submissions = require("../models/submissionModel");
const express = require("express");

const router = express.Router();
//Posting student's submission to the db
router.post("/", async (req, res) => {
  try {
    //posting the user's submission into db
    const submission = submissions(req.body);
    const saveSubmission = await submission.save();
    //sending a response to the user
    return res.status(200).json({
      message: "submitted successfully",
      data: saveSubmission,
    });
  } catch (e) {
    console.log(e);
  }
});

//getting all the submissions with (id) related to the same topic
//Though, I believe this might not be the most
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //getting a submission with this id
    const sub = await submissions.findOne({ _id: id });
    //finding submissions which related to the topic and yet to be reviewed, excluding the submission
    const getFiltered = await submissions.find({
      email: { $ne: sub.email },
      topic: sub.topic,
      reviewed: false,
    });

    //if there's one submission related to the topic and yet to be reviewed, will get all of them.
    if (getFiltered.length > 0) {
      //randomly pick any of the results from the filter data
      var keys = Object.keys(getFiltered);
      const unreview = getFiltered[keys[(keys.length * Math.random()) << 0]];
      return res.status(200).json({
        message: "Submission is available to review",
        data: unreview,
      });
    }

    return res.status(404).json({
      message: "no submission is available at the moment",
    });
  } catch (e) {
    console.log(e);
  }
});

router.put("/review/:id", async (req, res) => {
  try {
    //get submission id
    const _id = await req.params.id;
    //use submission id to fetch submission from db
    const sub = await submissions.findById(_id);
    //if the sub with the id is found update
    if (sub) {
      await submissions.updateOne({ $set: req.body });
      res.status(200).json({
        message: "successfully reviewed",
      });
    } else {
      res.status(403).json("Not available");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
