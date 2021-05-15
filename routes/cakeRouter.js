const express = require("express");
const cakeRouter = express.Router();

cakeRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the cakes to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the cakes: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /cakes");
  })
  .delete((req, res) => {
    res.end("Deleting all cakes");
  });

cakeRouter
  .route("/:cakeId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send cakes ${req.params.cakeId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /cakes/ ${req.params.cakeId}`);
  })
  .put((req, res) => {
    res.write(`Updating the cake: ${req.params.cakeId}\n`);
    res.end(`Will update the cake: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting cake: ${req.params.cakeId}`);
  });

module.exports = cakeRouter;
