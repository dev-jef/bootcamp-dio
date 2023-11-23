
//INPUTS


let NiveisDoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let NivelAtual = NiveisDoHeroi[0];


//Digite o nome do seu Heroi
let nomeDoHeroi = "BigJef";

//Digite a quantidade de XP
let xp = 9000



//PROCESS
if (xp <= 1000){
    NivelAtual = NiveisDoHeroi[0]

} else if(xp >= 1001 && xp <= 2000){
    NivelAtual = NiveisDoHeroi[1]

}else if(xp >= 2001 && xp <= 5000){
    NivelAtual = NiveisDoHeroi[2]
    
}else if(xp >= 5001 && xp <= 6000){
    NivelAtual = NiveisDoHeroi[3]
    
}else if(xp >= 6001 && xp <= 7000){
    NivelAtual = NiveisDoHeroi[4]
    
}else if(xp >= 7001 && xp <= 8000){
    NivelAtual = NiveisDoHeroi[5]
    
}else if(xp >= 8001 && xp <= 9000){
    NivelAtual = NiveisDoHeroi[6]
    
}else if(xp >= 9001 && xp <= 10000){
    NivelAtual = NiveisDoHeroi[7]
    
}else if(xp >= 10001){
    NivelAtual = NiveisDoHeroi[8]

}

//OUTPUTS

// mensagem a ser exibida
console.log("O Herói de nome "+nomeDoHeroi+"  está no nível de  "+ NivelAtual)