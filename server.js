require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const { handleError } = require("./helpers/error");

//connect DB
const connectDB = require("./config/db");
connectDB();

const app = express();

// config middleware
// -- CORS
app.use(cors());
// -- handle the body parsing
app.use(express.json());
// -- handle the form parsing
app.use(express.urlencoded({ extended: false }));

// api
app.use("/api/example", require("./routes/api/example.api"));

// development
app.get("/", (req, res) => res.send("API running"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// handle errors
app.use((err, req, res, next) => {
  handleError(err, res);
});

// production
if (process.env.NODE_ENV === "production") {
  // create static assets from react code for production only
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
