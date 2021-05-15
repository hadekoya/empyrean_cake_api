const express = require("express");
const commentsRouter = express.Router();

commentsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the comments to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the comments: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /comments");
  })
  .delete((req, res) => {
    res.end("Deleting all comments");
  });

commentsRouter
  .route("/:commentId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send comment ${req.params.commentId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /comment/ ${req.params.commentId}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the comment: ${req.params.commentId}\n`);
    res.end(`Will update the comment: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting comment: ${req.params.commentId}`);
  });

module.exports = commentsRouter;
