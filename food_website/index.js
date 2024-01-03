const express = require("express");
const {connectToMongoDb}  = require("./connect")
const path = require('path')
const cookieparser = require("cookie-parser");
const fooditemRoute = require("./routes/fooditem")

const staticRoute = require('./routes/staticRouter')
const userRoute = require("./routes/user")
const {restrictToLoggedinUserOnly,checkAuth} =  require("./middleware/auth")

const app = express();
const port = 8001;

connectToMongoDb('mongodb://127.0.0.1:27017/food-delivery')
.then(() => console.log("mongoDb connected successfully"))


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieparser());
// app.use('/url',restrictToLoggedinUserOnly,urlRoute)
app.use('/url',restrictToLoggedinUserOnly,fooditemRoute)

app.use('/user',userRoute)
app.use('/',checkAuth,staticRoute)

app.listen(port,()=>{console.log(`server started at port: ${port}`)})
