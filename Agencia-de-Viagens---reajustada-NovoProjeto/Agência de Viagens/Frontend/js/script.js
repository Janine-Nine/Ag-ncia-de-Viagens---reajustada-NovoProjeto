async function enviarContato() {

const dados = {
nome: document.getElementById("nome").value,
email: document.getElementById("email").value,
mensagem: document.getElementById("mensagem").value
};

await fetch("http://localhost:8080/contato", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(dados)
});

alert("Mensagem enviada com sucesso!");
}