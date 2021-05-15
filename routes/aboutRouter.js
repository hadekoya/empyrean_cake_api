const express = require("express");
const aboutRouter = express.Router();

aboutRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the abouts to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the abouts: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /abouts");
  })
  .delete((req, res) => {
    res.end("Deleting all abouts");
  });

aboutRouter
  .route("/:aboutId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send abouts ${req.params.aboutId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /abouts/ ${req.params.aboutId}`);
  })
  .put((req, res) => {
    res.write(`Updating the about: ${req.params.aboutId}\n`);
    res.end(`Will update the about: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting about: ${req.params.aboutId}`);
  });

module.exports = aboutRouter;
