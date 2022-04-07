const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

// heroku link: https://aqueous-forest-17404.herokuapp.com/
// mongodb://localhost:27017/AppDB
mongoose.connect("mongodb+srv://Tulasi533:Tulasi_533@cluster0.xttup.mongodb.net/AppDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB connected");
});

// middleware
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user",userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const blogRoute = require("./routes/blogpost");
app.use("/blogPost", blogRoute);

data = {
    msg: "Welcome on DevStack Blog App development YouTube video series",
    info: "This is a root endpoint",
    Working: "Documentations of other endpoints will be release soon :)",
    request: "Hey if you did'nt subscribed my YouTube channle please subscribe it",
};

app.route("/").get((req, res) => res.json(data));

app.listen(port, () => console.log(`Welcome you are listening at port ${port}`));