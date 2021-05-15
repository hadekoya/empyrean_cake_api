const express = require("express");
const feedbackRouter = express.Router();

feedbackRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the feedbacks to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the feedbacks: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /feedbacks");
  })
  .delete((req, res) => {
    res.end("Deleting all feedbacks");
  });

feedbackRouter
  .route("/:feedbackId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send feedbacks ${req.params.feedbackId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /feedbacks/ ${req.params.feedbackId}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the feedback: ${req.params.feedbackId}\n`);
    res.end(`Will update the feedback: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting feedback: ${req.params.feedbackId}`);
  });

module.exports = feedbackRouter;
