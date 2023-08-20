const form = document.getElementById('form-validacao');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);

    if (valorCampoB > valorCampoA) {
        mensagem.textContent = "Formulário válido: B é maior que A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido: B deve ser maior que A.";
        mensagem.style.color = "red";
    }
});
