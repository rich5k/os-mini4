const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port= 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/api",(req,res)=>{
    res.json(["The", "test", "is", "awesome"]);
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})