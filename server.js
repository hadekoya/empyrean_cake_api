const express = require("express");
const morgan = require("morgan");
const cakeRouter = require("./routes/cakeRouter");
const aboutRouter = require("./routes/aboutRouter");
const commentsRouter = require("./routes/commentsRouter");
const featuresRouter = require("./routes/featuresRouter");
const feedbackRouter = require("./routes/feedbackRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/cakes", cakeRouter);
app.use("/about", aboutRouter);
app.use("/comments", commentsRouter);
app.use("/features", featuresRouter);
app.use("/feedback", feedbackRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>This is Empyrean Cake API Landing Page</h1></body></html>"
  );
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
