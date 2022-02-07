const express= require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts")
const categoresRoute = require("./routes/categories");

dotenv.config()
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connected"))
    .catch((err)=>console.log("err"));

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoresRoute);

app.listen("5000",()=>{
    console.log("bakend is runing")
})