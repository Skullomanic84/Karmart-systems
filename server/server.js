//imports from 3rd part library
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require("cookie-parser");

//imports from local files
const errorHandler= require('./helper/errorHandler');
const userRoute = require('./routes/userRoute');

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());



//routes middeleware
app.use("/api/v1/users", userRoute);


//routes


//error middleware
app.use(errorHandler);

// mongoose db set-up
mongoose.set("strictQuery", false);
const PORT = process.env.PORT || 6000;

//connect to DB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at Port: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));