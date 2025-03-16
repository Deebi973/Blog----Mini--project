const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const express1 = require('express');
const app = express1();
const Blog=require("./routes/blogroutes")

app.use(express1.json());
app.use(cors());
app.use(express1.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("MongoDB Connection Error:",err));


app.use("/api/blogs",Blog);


app.listen(3000,() => {
    console.log("Server is Running on port 3000")
});