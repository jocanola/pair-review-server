const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const studentSubmissions = require("./routes/submissionRoute");
const app = express();
//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
dotenv.config();

//listening to the port
app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("starting backend");
});
//Connect to mongodb
mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Databaee connected");
  }
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.get("/", (req, res) => {
  res.status(200).send("starting schoolhouse server");
});

// const postBookRouter = require("./routes/postBook");
app.use("/api/v1", studentSubmissions);