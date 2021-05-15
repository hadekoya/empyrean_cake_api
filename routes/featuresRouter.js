const express = require("express");
const featuresRouter = express.Router();

featuresRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the features to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the features: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /features");
  })
  .delete((req, res) => {
    res.end("Deleting all features");
  });

featuresRouter
  .route("/:featureid")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send features ${req.params.featureid} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /features/ ${req.params.featureid}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the features: ${req.params.featureid}\n`);
    res.end(`Will update the features: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting features: ${req.params.featureid}`);
  });

module.exports = featuresRouter;
