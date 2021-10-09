const express = require("express");
const app = express();

const PORT = 2222;

//Set up CORS so angular and express can communicate
const cors = require("cors");
app.use(cors());


//import fs so we can create, edit, read and remove files
const fs = require("fs");


//Get a list of the files that we can edit
app.get("/files", (request, response)=>{

});

//Create a new file
app.post("/files", (request, response)=>{

});

//Edit a file
app.put("/files", (request, response)=>{
    
});

app.listen(PORT, ()=>{
    console.log("Server is doing good. Ready for requests! e___e");
});