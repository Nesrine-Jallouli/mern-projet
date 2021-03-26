const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
// const entreprise= require("./routes/entreprise");
const offre = require("./routes/offre")
const app = express();
app.use(express.json());
connectDB();
app.use('/user' , user);
// app.use('/entreprise' , entreprise);
app.use('/offre' , offre)
const PORT = process.env.PORT || 7000;

app.listen(PORT, (err) =>
  err
    ? console.log("Server Error", err)
    : console.log(`Server is running on PORT ${PORT}`)
);
