
let text = document.getElementById("msg");

function alterarAlinhamento() {
    text.setAttribute("placeholder", "");
    text.style.textAlign = "justify";
}

function voltarOriginal() {
  if(text.value.length == 0){
    text.setAttribute("placeholder", "Digite sua mensagem");
    text.style.textAlign = "center";
  }
}
