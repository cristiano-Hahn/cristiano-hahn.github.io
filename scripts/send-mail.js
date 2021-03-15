function validateFields() {
    document.getElementById("send-button").disabled =
        !document.getElementById("input-email").value
        || !document.getElementById("input-name").value
        || !document.getElementById("input-message").value
}

document.getElementById("input-email").onkeyup = validateFields
document.getElementById("input-name").onkeyup = validateFields
document.getElementById("input-message").onkeyup = validateFields

document.getElementById("send-button").onclick = function () {
    document.getElementById("send-button").disabled = true
    document.getElementById("send-button").innerHTML = "Entrando em contato..."

    var templateParams = {
        from_email: document.getElementById("input-email").value,
        from_name: document.getElementById("input-name").value,
        message: document.getElementById("input-message").value
    };
    emailjs.send('service_m79zq59', 'template_s6mno7e', templateParams)
        .then(function (response) {
            document.getElementById("send-button").innerHTML = "Mensagem enviada! Obrigado :)"
            document.getElementById("send-button").style.backgroundColor = "#00B7AC"
        }, function (error) {
            document.getElementById("send-button").innerHTML = "Eita! ocorreu algum problema"
            document.getElementById("send-button").style.backgroundColor = "#ea4646"
        });
}