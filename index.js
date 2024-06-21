const express = require('express');
const port = 8000;

const db = require('./config/mongoose');


const app = express();
app.use(express.urlencoded());
app.use(express.json());


app.use("/", require("./routes"));


app.listen(port, function(err){
    if(err) {
        console.log(`Error in starting the server at port ${post}`, err);
        return;
    }
    console.log(`Server working fine on port ${port}`);
})