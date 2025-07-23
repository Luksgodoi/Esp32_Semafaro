
let clienteweb =null

const clienteId = "Esp32" + Math.floor(Math.random()*900) + 100
// onfiguração para conectat ao broker MQTT o método Paho.MQTT.Cliente necessita do Host, número da Porta e o cliente ID
clienteweb = new Paho.MQTT.Client("broker.hivemq.com",8884,clienteId)

// Conectar ao MQTT
clienteweb.connect({
    useSSL:true, // utilizando a conexão segura para poder hospedar o render
    onSuccess: function(){ // função para ao conectar ao broker informar que conectou com sucesso
        alert("Conectado ao broker com sucesso :)")
    },
    onFailure: function(){ // em caso de falha, informa o erro
        alert("A conexão falhou:(")
    }
})
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