function base64Encode() {
    let inputText = document.getElementById("texto").value;
    document.getElementById("resultado").value = btoa(inputText);
}

function base64Decode() {
    let encryptedText = document.getElementById("texto").value;
    document.getElementById("resultado").value = atob(encryptedText);
}

async function copiarTexto() {
    let inputTexto = document.getElementById("resultado");
    const texto = inputTexto.value;
    try {
        await navigator.clipboard.writeText(texto);
        document.getElementById('resultado').innerText = "Texto copiado: " + texto;
        alert("texto copiado!")
    } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
        document.getElementById('resultado').innerText = "Erro ao copiar o texto.";
    }
}

function validacao(event) {
    let ch = String.fromCharCode(event.keyCode);
    let filter = /^[a-z\s]*$/;

    if (!filter.test(ch)) {
      alert("Letras maiusculas ou caracteres especiais não serao aceitos");
      event.preventDefault()
    }
}