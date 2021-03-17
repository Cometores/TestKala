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
    if (newReg.username.length < 5 || newReg.password.length < 3) {
        res.status(501)
        res.send({"success": "false", "errorMsg": "Too short user and pass!"});
        return;
    }
    else if(newReg.username.length < 5) {
        res.status(502)
        res.send({"success": "false", "errorMsg": "Too short user!"});
        return;
    }
    else if(newReg.password.length < 3) {
        res.status(503)
        res.send({"success": "false", "errorMsg": "Too short pass!"});
        return;
    }

    //Проверка на существуещего пользователя
    for (user in logins.logins) {
        if (newReg.username == logins.logins[user].username) {
            res.status(504)
            res.send({"success": "false", "errorMsg": "User always exists"});
            return;
        }
    }

    logins.logins.push(newReg);
    logins = JSON.stringify(logins);

    fs.writeFileSync('./loginData/logins.json', logins);
    res.status(201);
});




//Login
app.put('/login', (req, res) => {
    var userLogin = req.body;
    var logins = JSON.parse(fs.readFileSync('./loginData/logins.json', 'utf8'));



    //Проверка на правильность заполнения формы
    if (userLogin.password.len == 0 || userLogin.username.len == 0)
    {
        res.status(505)
            res.send({"success": "false", "errorMsg": "input invalid"});
            return;
    }



    //Логин в систему
    for (user in logins.logins) {
        if (userLogin.username == logins.logins[user].username &&
            userLogin.password == logins.logins[user].password) {
            
        }
    }


    //Логин АДМИНОМ
    if (userLogin.username == "admin" && userLogin.password == "password")
    {

    }
});




app.listen(8080, () => {
    console.log("Server running on port 8080");
});