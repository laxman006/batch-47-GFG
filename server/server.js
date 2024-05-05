const express = require("express");

const app = express();
const cookieParser = require("cookie-parser");
require('./dbConnection');
// used to read data passed to request body
app.use(express.json());
app.use(cookieParser());
// router middleware
const router = require("./routes/router");
const errorHandler = require("./utils/errorHandler");
const userRouter = require("./routes/userRouter");
const { authController } = require("./controllers/authController");
const cartRouter = require("./routes/cartRouter");

const PORT = 4000;

// http://localhost:4000/checkServer

app.get('/checkServer',(req,res)=>{
    console.log(req.path);
    console.log(req.params);
    console.log(req.query);

    res.send({success:true, message:'Successful response from server'});
});

// http://localhost:4000/router
app.use('/router',router);


// userRouter->signupController
app.use('/user',userRouter);
app.use('/cart',cartRouter);

app.use(errorHandler);


app.listen(PORT,()=>{
    console.clear();
    console.log(`Server running on port - ${PORT}`)
})