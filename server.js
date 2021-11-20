var express = require("express");
var app = express();

app.get("/api",(req,res)=>{
    res.json(["The", "test", "is", "awesome"]);
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})