const nome = document.querySelector('input[name="txtNome"]')
const idade = document.querySelector('input[name="txtIdade"]')
const tipo = document.querySelector('select[name="cbClasse"]')
const imgDoHeroi = document.querySelector("img.imgDoHeroi")
const informacoesDoHeroi = document.querySelector('h2.informacoes')
const mensagem = document.querySelector('h2.mensagem')

class heroi{
    constructor(nome="", idade="", tipo=""){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    setDados(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    getDados(){
        return (`Nome: ${this.nome} Idade: ${this.idade} Classe: ${this.tipo}`)
    }
    

    atacar(){
        switch (this.tipo){
            case "guerreiro":
                return (`O ${this.tipo} atacou com sua espada`);
            case "mago":
                return (`O ${this.tipo} atacou com sua magia de fogo`);
            case "ninja":
                return (`O ${this.tipo} atacou com sua Fuuma Shuriken`);
            case "monge":
                return (`O ${this.tipo} atacou com suas proprias mãos`);
            case "ladrao":
                return (`O ${this.tipo} atacou com suas facas`);
            
            }
    }

    defender(){
        switch (this.tipo){
            case "guerreiro":
                return (`O ${this.tipo} se defendeu com seu escudo`);
            case "mago":
                return (`O ${this.tipo} se defendeu com sua magia muro de pedra`);
            case "ninja":
                return (`O ${this.tipo} se defendeu com seu bracelete de metal `);
            case "monge":
                return (`O ${this.tipo} se defendeu com seus proprios braços`);
            case "ladrao":
                return (`O ${this.tipo} se defendeu com suas facas`);

            }
    }

    especial(){
        switch (this.tipo){
            case "guerreiro":
                return (`O ${this.tipo} usou a habilidade especial Furia implacavel`);
            case "mago":
                return (`O ${this.tipo} usou sua magia especial Relampago da morte`);
            case "ninja":
                return (`O ${this.tipo} usou um Jutsu Dragão d'agua `);
            case "monge":
                return (`O ${this.tipo} usou a habilidade especial Acumulo de Chi`);
            case "ladrao":
                return (`O ${this.tipo} usou a habilidade especial Tornado de laminas`);

            }
    }
    

}

const seuHeroi = new heroi()


function btnAtacar(){
    
    mensagem.textContent = seuHeroi.atacar()
    scrollParaFinal()
}

function btnDefender(){
    
    mensagem.textContent = seuHeroi.defender()
    scrollParaFinal()
}

function btnEspecial(){
    
    mensagem.textContent = seuHeroi.especial()
    scrollParaFinal()
}

function slcTipoAlterarCSS(){
    tipo.style.borderBottomLeftRadius = '0';
    tipo.style.borderBottomRightRadius = '0';
}

function slcTipoResetarCSS(){
    tipo.style.borderBottomLeftRadius = '30px';
    tipo.style.borderBottomRightRadius = '30px';
}

tipo.onblur = ResetCssSelect()
 
tipo.onfocus = function(){
    tipo.style.borderBottomLeftRadius = '0';
    tipo.style.borderBottomRightRadius = '0';
}   


function ResetCssSelect(){


    tipo.style.borderBottomLeftRadius = '30px';
    tipo.style.borderBottomRightRadius = '30px';

   
}
function exibeInformacoesHeroi(){
    
    let informa = seuHeroi.getDados()
    informacoesDoHeroi.textContent = informa;
    mensagem.textContent = " ";
}
 
function scrollParaFinal() {
    window.scrollTo(0,2000)
  }

function slcTipoAterarImagem(){

    seuHeroi.setDados(nome.value, idade.value, tipo.value)
    console.log(seuHeroi.tipo)
    
    switch (seuHeroi.tipo){
        case "guerreiro":
            imgDoHeroi.setAttribute('src', '/src/img/guerreiro.png')
            break;
        case "mago":
            imgDoHeroi.setAttribute('src', '/src/img/mago.png')
            break;
        case "ninja":
            imgDoHeroi.setAttribute('src', '/src/img/ninja.png')
            break;
        case "monge":
            imgDoHeroi.setAttribute('src', '/src/img/monge.png')
            break;
        case "ladrao":
            imgDoHeroi.setAttribute('src', '/src/img/ladrao.png')
            break;
        
    }
    ResetCssSelect()
    exibeInformacoesHeroi()
    scrollParaFinal()
    
}