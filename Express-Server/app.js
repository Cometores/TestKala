const express = require("express");
const fs = require('fs');
const cors = require('cors');


var app = express();
app.use(express.json());
app.use(cors());



//Registraion hier
app.put('/registration', (req, res) => {
    var newReg = req.body;
    var logins = JSON.parse(fs.readFileSync('./loginData/logins.json', 'utf8'));

    logins.logins.push(newReg);
    logins = JSON.stringify(logins);

    fs.writeFileSync('./loginData/logins.json', logins);
    console.log(logins);
    res.status(201);
});



app.listen(8080, () => {
    console.log("Server running on port 8080");
});