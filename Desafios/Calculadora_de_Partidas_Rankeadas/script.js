
let NumberOfWin = 320
let NumberOfDefeat = 50
let ranking =  ""

// obtem o saldo de Vitorias
function getWinBalance(NumberOfWin,NumberOfDefeat){
    if (!isNaN(NumberOfWin) && !isNaN(NumberOfDefeat)){
        return NumberOfWin-NumberOfDefeat
    }else{

        return " ---Numeros invalidos--- "
    }
}

// obtem o ranking
function getRanking(WinBalance){
    
    switch (true){
        case (WinBalance <= 10):
            return "ferro"
            break;
        case (WinBalance <= 20):
            return "Bronze"
            break;

        case (WinBalance <= 50):
            return "Prata"
            break;
        
        case (WinBalance <= 80):
            return "Ouro"
            break;
        
        case (WinBalance <= 90):
            return "Diamante"
            break;

        case (WinBalance <= 100):
            return "Lendario"
            break;

        case (WinBalance > 101):
            return "Imortal"
            break;

        default:
            return "Noob"

    }    
}


 function printMessage(message){
    console.log(message)
 }



let message = 
printMessage("O Herói tem de saldo de "+ getWinBalance(NumberOfWin,NumberOfDefeat)+" Vitórias está no nível de " + getRanking(getWinBalance(NumberOfWin,NumberOfDefeat)))

