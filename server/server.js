const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/userRoute');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());



//routes middeleware
app.use("/api/v1/users", userRoute);


//routes




// MONGOOSE SET UP
mongoose.set("strictQuery", false);
const PORT = process.env.PORT || 6001;
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