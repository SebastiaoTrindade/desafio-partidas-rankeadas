
function calcularNivel(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;
    
    let nivel;
   
    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
            break;
    }
    
    return "O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel;
}

var resultado = calcularNivel(100, 60);
console.log(resultado);
