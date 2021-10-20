function escreve(valor){
    var tela = document.getElementById("visor");
    console.log(tela)
    tela.innerHTML += valor

}

function limpar(){
    var tela = document.getElementById("visor");
    tela.innerHTML = ""
}

function apagarUltimo(){
    var tela = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = tela.substring(0, tela.length -1);
}
function resultado(){
    var tela = document.getElementById("visor").innerHTML;
    console.log(typeof(tela));
    document.getElementById('visor').innerHTML = eval(tela);
}

