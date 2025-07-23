
function ligarvermelho(){

    document.getElementById("vermelho").classList.add("vermelho")
    document.getElementById("amarelo").classList.remove("amarelo")
    document.getElementById("verde").classList.remove("verde")
}

function ligaramarelo(){

    document.getElementById("amarelo").classList.add("amarelo")
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("verde").classList.remove("verde")
}

function ligarverde(){

   document.getElementById("verde").classList.add("verde")
   document.getElementById("vermelho").classList.remove("vermelho")
   document.getElementById("amarelo").classList.remove("amarelo")
}

function automatico(){

    alert("Automático!")
}

function desligar(){

   document.getElementById("vermelho").classList.remove("vermelho")
   document.getElementById("amarelo").classList.remove("amarelo")
   document.getElementById("verde").classList.remove("verde")
}