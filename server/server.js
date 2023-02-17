const express = require('express');
const mongoose = require('mongoose');
const bodyParser = ('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();



//middleware
const app = express();
app.use(cors());
app.use(express.json());


//routes




// MONGOOSE SET UP
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