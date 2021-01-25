function calcdice(idbtn) {
    var valorDado = document.getElementById("qtd"+idbtn).value;
    switch (idbtn) {
        case "d4":
            var resultado = (Math.floor(Math.random() * 4) + 1) * valorDado;
            document.getElementById("result"+idbtn).innerHTML = "Resultado foi: " + resultado;
            break;
    
        case "d6":
            var resultado = (Math.floor(Math.random() * 6) + 1) * valorDado;
            document.getElementById("result"+idbtn).innerHTML = "Resultado foi: " + resultado;
            break;
    
        case "d8":
            var resultado = (Math.floor(Math.random() * 8) + 1) * valorDado;
            document.getElementById("result"+idbtn).innerHTML = "Resultado foi: " + resultado;
            break;
    
        case "d10":
            var resultado = (Math.floor(Math.random() * 10) + 1) * valorDado;
            document.getElementById("result"+idbtn).innerHTML = "Resultado foi: " + resultado;
            break;
    
        case "d12":
            var resultado = (Math.floor(Math.random() * 12) + 1) * valorDado;
            document.getElementById("result"+idbtn).innerHTML = "Resultado foi: " + resultado;
            break;
    
        case "d20":
            var resultado = (Math.floor(Math.random() * 20) + 1) * valorDado;
            document.getElementById("result"+idbtn).innerHTML = "Resultado foi: " + resultado;
            break;
    
        case "d100":
            var resultado = (Math.floor(Math.random() * 100) + 1) * valorDado;
            document.getElementById("result"+idbtn).innerHTML = "Resultado foi: " + resultado;
            break;
    
        default:
            console.log("deu algo errado");
            break;
    }
  }