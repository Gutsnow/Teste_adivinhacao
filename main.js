alert("bem vindo, Escolha um numero de 0 a 100")



var meta = parseInt(Math.random() * 100)

var contador = 1

console.log(meta)
while(numero != meta){

    var numero = prompt("digite o numero escolhido")

    if(numero == meta){
        break;
    }
    else{
        if(numero < meta){
            alert(`ERROU, o numero é MAIOR que o numero ${numero}`)
        }
        else{
            alert(`ERROU, o numero é MENOR que o ${numero}`)
        }
        contador++;
    }
}

var numContador = contador > 1 ? "tentativas" : "tentativa"
alert(`ACERTOU, o numero ${numero} era o segredo escondido, e você acertou em ${contador} ${numContador}`)



