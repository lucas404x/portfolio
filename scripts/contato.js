function alterarAlinhamento() {
  text.setAttribute("placeholder", "");
  text.style.textAlign = "justify";
}

function voltarOriginal() {
  if (text.value.length == 0){
    text.setAttribute("placeholder", "Digite sua mensagem");
    text.style.textAlign = "center";
    document.getElementById("contador").innerHTML = '0/100';
    }

}

function limite() {
  document.getElementById("contador").innerHTML = `${text.value.length + 1}/100`;
}

function backsp_limite() {
  if (event.key == "Backspace") {
    document.getElementById("contador").innerHTML = text.value.length > 0 ? `${text.value.length - 1}/100` : "0/100";
  }
}


let text = document.getElementById("msg");