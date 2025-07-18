const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/User");
const cors = require("cors")
require("dotenv").config();
app.use(cors({
origin:"http://localhost:5173",
credentials:true
}))


const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const connectionRequest = require("./routes/request");
const userRouter = require("./routes/user");



app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", connectionRequest)
app.use("/", userRouter)



connectDb()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 1212");
    });
  })
  .catch((error) => {
    console.log("Database not connected", error.message);
  });