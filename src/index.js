const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.get("/quote", (req, res) => {
    res.status(200).json("quotes");
});

app.get("/random")

app.listen(5000, ()=>{
    console.log("Server started on port no. 5000");
})