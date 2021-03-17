const userInput = document.querySelector('#username');
const passInput = document.querySelector('#passwort');
const regBttn = document.querySelector('#registration');


regBttn.addEventListener('click', function () {
    fetch("http://localhost:8080/registration", {
        method: "put",
        body: JSON.stringify({
            username: userInput.value,
            passwort: passInput.value,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
});