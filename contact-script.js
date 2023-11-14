const nameLbl = document.getElementById('nameLbl');
const email = document.getElementById('email');
const message = document.getElementById('message');

function submitForm() {
    let nameValue = nameLbl.value;
    let emailValue = email.value;
    let messageValue = message.value;

    alert("Enviado com sucesso!\n\nDados enviados:\n\tNome: " + nameValue + "\n\tEmail: " + emailValue + "\n\tMensagem: " +messageValue);
}

function checkErrors() {
    console.log(nameLbl.validity)
    console.log(email.validity)
    console.log(message.validity)

    let errorName = document.getElementById('nameErrors');
    let errorEmail = document.getElementById('emailErrors');
    let errorMessage = document.getElementById('messageErrors');

    errorName.innerHTML = '';
    errorEmail.innerHTML = '';
    errorMessage.innerHTML = '';

    nameLbl.classList.remove("invalid-input");
    email.classList.remove("invalid-input");
    message.classList.remove("invalid-input");

    if (!nameLbl.validity.valid) {
        const emptySmall = document.createElement("small");
        emptySmall.innerHTML = "O campo é obrigatório!";

        nameLbl.classList.toggle("invalid-input");
        errorName.appendChild(emptySmall);
    }

    if (!email.validity.valid) {
        const regexSmall = document.createElement("small");
        regexSmall.innerHTML = "O campo está fora dos padrões aceitos!";
        const emptySmall = document.createElement("small");
        emptySmall.innerHTML = "O campo é obrigatório!";

        email.classList.toggle("invalid-input");
        if (email.validity.valueMissing) {
            errorEmail.appendChild(emptySmall);
        } else {
            errorEmail.appendChild(regexSmall)
        }
    }

    if (!message.validity.valid) {
        const emptySmall = document.createElement("small");
        emptySmall.innerHTML = "O campo é obrigatório!"

        message.classList.toggle("invalid-input");
        errorMessage.appendChild(emptySmall);
    }

}