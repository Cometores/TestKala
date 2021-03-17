console.log('zdarova');

const userInput = document.querySelector('#username');
const passInput = document.querySelector('#password');
const regBttn = document.querySelector('#registration');


regBttn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
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