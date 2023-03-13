const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const videoRoutes = require("./routers/videoRoutes");
const ratingRoutes = require("./routers/ratingRoutes");
const emotionRoutes = require("./routers/emotionRoutes");
const userRoutes = require("./routers/userActionRoutes");
const checkID = require("./routers/userActionRoutes")
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(
    "mongodb+srv://emotiplay:emotiplay@cluster0.mqbcnqd.mongodb.net/test",
    {}
  )
  .then(() => {
    console.log("connection to data base successed");
  })
  .catch((error) => {
    console.log("error");
    console.log(error);
  });

const app = express();
app.use(express.json());
app.use(cors());

app.use("/video", videoRoutes);
app.use("/rate", ratingRoutes);
app.use("/emotion", emotionRoutes);
app.use("/user", userRoutes);
// app.get('/login', login)

app.listen(8639, () => console.log("listening on port 8639"));
