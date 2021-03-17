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


    //Проверка на символы
    // if (newReg.username.length < 5 || newReg.password.length < 3) {
    //     res.status(500)
    //     return;
    // }
    // else if(newReg.username.length < 5) {
    //     alert('Name zu kurz');
    //     return;
    // }
    // else if(newReg.password.length < 3) {
    //     alert('Passwort zu kurz');
    //     return;
    // }

    for (user in logins.logins) {
        if (newReg.username == logins.logins[user].username) {
            //res.status(504)
            res.send({"success": "false", "errorMsg": "Too mny symbols!"});
            return;
        }
    }

    logins.logins.push(newReg);
    logins = JSON.stringify(logins);

    fs.writeFileSync('./loginData/logins.json', logins);
    console.log(logins);
    res.status(201);
});



app.listen(8080, () => {
    console.log("Server running on port 8080");
});