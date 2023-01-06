// Exercício 1;
let frutas = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"];

function vowelsCount(str){
    let contadorDasVogais = 0;        // contador das vogais;

    let novaLista = [];                 // nova lista que recebera os resultados do loop;
    for(let i = 0; i < str.length; i++){
        // console.log(str)                   // adentrando o array e separando as posições por [i];
        let fruta = str[i];
        // console.log(fruta);
        for(let j = 0; j < fruta.length; j++){
            // console.log(fruta[j])               // adentrando as palavras e separando as letras por [j];
        if(fruta[j] == "a" || fruta[j] == "e" || fruta[j] == "i" || fruta[j] == "o" || fruta[j] == "u"){
            contadorDasVogais++         // somando +1 a variavel de contador para retornar a quantidade de vogais;
        }
    }
    novaLista.push(contadorDasVogais);         //  adicionando o numero de vogais na última posição dentro do novo array;
    contadorDasVogais = 0;                  // zerando o contador para que quando volte no loop, não some o valor anterior;
    }
    return novaLista;              // retornando o novo array com o respectivo resultado do loop;
};


// Exercício 2;

function stringTripletGroup(string){
    let stringTeste = "";           // string que recebera o resultado do loop antes de entrar no array;
    let stringArr = [];    // nova array que recebera as strings  do loop;

    for(i = 0; i < string.length;i+=3){
        stringTeste += string[i];    // retorno da primeira letra;
        stringTeste += string[i+1]; // retorno da segunda letra;

        if(string[i+2] !== undefined){
            stringTeste += string[i+2];   // retorno da terceira letra com condicional;
        }else{
            stringTeste += " ";        // se for igual a undefined ele adiciona o espaço;
        }
        // stringTeste += string[i+2];      // string anterior que retornava com undefined;


        stringArr.push(stringTeste);  // adicionando ao array a stringTeste com 3 letras;
        stringTeste = "";         // limpando a string para receber novamente o novo push de 3 letras;
        // console.log(stringArr);
        // console.log(stringTeste);
    }return stringArr;           // retorno da string inteira de 3 em 3;
};


// Exercício 3;
let pets = ["dog", "cAt", "Cat", "doG", "CAT", "Dog", "caT", "DOG"];

function dominantPet(arr){
    let contadorGatos = 0;
    let contadorCaes = 0;
    for(let i = 0; i < arr.length; i++){        // adentra o array de pets
        let lista = arr[i]              // transforma arr[i] em lista;
        let listaMinuscula = lista.toLowerCase();  //transforma todas as letras em minusculas;
        if(listaMinuscula == "dog"){
            contadorCaes++;                 // se dog aparecer, vai somar 1 no contador de cães;
        }else if(listaMinuscula == "cat"){
        contadorGatos++;                    // se dog aparecer, vai somar 1 no contador de cães;
        }
        // console.log(listaMinuscula);
    }if(contadorGatos > contadorCaes){
        return "CAT!";            // condicional para gerar o resultado de CAT!;
    }else if(contadorGatos < contadorCaes){
        return "DOG!";            // condicional para gerar o resultado de DOG!;
    }return "DRAW!";            // condicional para cara empate;
};


// Exercício 4;
let arrNum = [14, 25, 32, 50, 35, 30];
let divisor = 5;

function divisibleList(lista, numero){
    let divisiveis = [];
    for(i = 0; i < lista.length; i++){        // adentrando o array de numeros;
        let numeros = lista[i]      // transformando os numero indice em variavel;
        // console.log(numeros);
        if(numeros % numero == 0){      // condicional para resultado;
            divisiveis.push(numeros);
        }
    }return divisiveis;          // retorno do novo array;
};

// Exericio 5;

function trustMeOrNot(bool, numero){
    let arrDeConfiança = [];
    for(i = 0; i < numero; i++){        // repetindo o bool de acordo com parâmetro dentro do loop;
        if(bool == true){           
            arrDeConfiança.push(bool);     // condicional pro true
        }else if(bool == false);
        arrDeConfiança.push(bool);     // condicional pro false
    }return arrDeConfiança;
};

// Exercício 6;
let estadoLamp = [false, false, true, false, true, true, true];

function changeLampStatus(lista){
    let inversoLamp = [];
    for(i = 0; i < lista.length; i++){
        let estado = lista[i];          // adentrando a lista de estados;
        // console.log(estado)
        if(estado == false){
            estado = true;          // condicional para transformar false em true;
            inversoLamp.push(estado) // push para adicionar a nova lista
        }else if(estado == true){
            estado = false;      // condicional para transofarm true em false;
            inversoLamp.push(estado); // push para adicionar a nova lista;
        }
    }return inversoLamp;        // retornando a nova lista;
};

// Exercício 7;
let notas = [6.0, 5.5, 6.7, 8.0, 10, 10, 7.1];
function averageGrade(lista){
    let mediaNotas = 0;

    for(i = 0; i < lista.length;i++){
        let media = lista.length;
        let nota = lista[i];
        let mediaDasNotas = nota / media;
        // console.log(mediaDasNotas)
        mediaNotas += mediaDasNotas;
    }return mediaNotas.toFixed(2);
};

// Exercício 8;
let num = [3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7];
function canvasDeliveriesPercentage(lista){
    let pocentagemEntregue = 0;

    for(i = 0; i < lista.length;i++){
        let nota = lista[i];
        pocentagemEntregue+=nota;

    }return `A porcentagem total de entregas atingida é: ${pocentagemEntregue.toFixed(2)}%`;
};