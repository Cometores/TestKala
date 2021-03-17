const userInput = document.querySelector('#username');
const passInput = document.querySelector('#password');
const regBttn = document.querySelector('#login');


regBttn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("zopa");
    fetch("http://localhost:8080/login", {
        method: "put",
        body: JSON.stringify({
            username: userInput.value,
            passwort: passInput.value,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        if (res.status == 505) {
            alert("Ungültige Daten");
        }
    })
})