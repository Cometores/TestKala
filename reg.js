const userInp = document.querySelector('#username');
const passInp = document.querySelector('#password');
const regBtn = document.querySelector('#registration');


regBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("zopa");
    fetch("http://localhost:8080/registration", {
        method: "put",
        body: JSON.stringify({
            username: userInp.value,
            password: passInp.value,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        if (res.status == 501) {
            alert("Name und Password zu kurz");
        }
        else if (res.status == 502) {
            alert("Name zu kurz");
        }
        else if (res.status == 503) {
            alert("Password zu kurz");
        }
        else if (res.status == 504) {
            alert("User schon bereits existiert");
        }
        else if (res.status == 201) {
            alert("Registrierung erfolgreich!");
        }
    })
});