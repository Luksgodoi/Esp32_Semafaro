
let clienteweb =null

const clienteId = "Esp32" + Math.floor(Math.random()*900) + 100
// onfiguração para conectat ao broker MQTT o método Paho.MQTT.Cliente necessita do Host, número da Porta e o cliente ID
clienteweb = new Paho.MQTT.Client("broker.hivemq.com",8884,clienteId)
//clienteweb = new Paho.MQTT.Client("broker.emqx.io",8084,clienteId)

// Conectar ao MQTT
clienteweb.connect({
    timeout:8, // tenta conectar o dobro do tempo inserido aqui e caso não consiga, apresenta a informação de erro
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

    const msg = new Paho.MQTT.Message("V1") // payload que será enviado ao tópico
    msg.destinationName = "senai801/Led/Liga" // tópico
    clienteweb.send(msg) // envia a informação para o tópico
}

function ligaramarelo(){

    document.getElementById("amarelo").classList.add("amarelo")
    document.getElementById("vermelho").classList.remove("vermelho")
    document.getElementById("verde").classList.remove("verde")

    const msg = new Paho.MQTT.Message("A1") // payload que será enviado ao tópico
    msg.destinationName = "senai801/Led/Liga" // tópico
    clienteweb.send(msg) // envia a informação para o tópico
}

function ligarverde(){

   document.getElementById("verde").classList.add("verde")
   document.getElementById("vermelho").classList.remove("vermelho")
   document.getElementById("amarelo").classList.remove("amarelo")

   const msg = new Paho.MQTT.Message("Vd1") // payload que será enviado ao tópico
    msg.destinationName = "senai801/Led/Liga" // tópico
    clienteweb.send(msg) // envia a informação para o tópico
}

function automatico(){

  const msg = new Paho.MQTT.Message("AUT") // payload que será enviado ao tópico
    msg.destinationName = "senai801/Led/Liga" // tópico
    clienteweb.send(msg) // envia a informação para o tópico
}

function desligar(){

   document.getElementById("vermelho").classList.remove("vermelho")
   document.getElementById("amarelo").classList.remove("amarelo")
   document.getElementById("verde").classList.remove("verde")

   const msg = new Paho.MQTT.Message("DEL") // payload que será enviado ao tópico
    msg.destinationName = "senai801/Led/Liga" // tópico
    clienteweb.send(msg) // envia a informação para o tópico
}