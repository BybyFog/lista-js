/*
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){ // temos uma função que exibe coisas na tela, mas não retorna nada pra gente 
 
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;

}

exibirTextoNaTela('h1', 'jogo do número secreto');
exibirTextoNaTela('p', ' escolha um número entre 1 e 10'); 

function verificarChute(){ 
    let chute = document.querySelector('input').value;                                              // temos uma função vazia 
     console.log(chute == numeroSecreto); 
}

function gerarNumeroAleatorio(){ // e aqui temos uma função que irá retornar algo pra gente 
 
  return parseInt(Math.random ()  * 10 + 1); 

}

*/

// function olaMundo() {  // exibir mensagem no console

//    console.log('Olá, mundo');

// }

// function porNome() {
//    let nome = prompt('ponha seu nome: ')

//    console.log(`olá, ${nome}!`)

// }                                  // por nome 



// // retornar o dobro


// function retorneDobro(numero) {

//    return numero * 2;

// }

// function chamaDobro() {
//    console.log(retorneDobro(10));
// }

// let resultadoDobro = retorneDobro(10);
// console.log("retorneDobro" + resultadoDobro);


// function recebaTresnumeros(num1, num2, num3) {
//    return (num1 + num2 + num3) / 3;
// }


// // retornar o maior 

// function retorneOMaior() {

//    let maior = prompt('ponha seu número:');
//    let menor = prompt('ponha outro número :');

//    if (maior > menor) {
//       console.log('é maior!');
//    }
//    else {
//       console.log('é menor!');
//    }


// }

// function retornarOResultado(num) {

//    return (num * num)
// }

// let resultad = quadrado(2);
// console.log(resultad); 




function media ( nota1, nota2, nota3, nota4){ // função criada p/ que tudo possa ocorrer dentro dela 

return(nota1 + nota2 + nota3 + nota4)/4; 

}
function chamaMedia(){      // criar uma nova unção pra testar a função que eu criei 
   console.log(media(7,6,3,5));  
  
}
 function verificacao(){ 
   let resultado = media(7,3,6,5); 
                                                           // por comando de voz
  return resultado >= 5 ? 'aprovado' : 'reprovado';



 }
 console.log(verificacao())


// function calculaIMC( peso, altura){

//    return   peso / (altura * altura);

// }
//   function massa(){
//    return  calculaIMC(70 , 1.72);

//   }
//     console.log(massa()); 




// fatorial multiplicação de seu produto, pelos seus antecessores ex; 5! 5*4*3*2*1 = 120 

// function Fatorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;

//   }


//   let fatorial = 1;
//   for (let i = 2; i <= numero; i++) {
//     fatorial *= i;

//   }

//   return fatorial;
// }
// //VER RESULTADO DEPOISSS
// function valor() {
//   let numero = 5;
//   let resultado = Fatorial(numero);

//   console.log(`O fatorial de ${5} é ${resultado}`);
// }



// CRIAR UMA FUNÇÃO QUE CONVERTA UM VALOR EM DOLAR

// function converteEmrReais(valorEmDolar) {
//   let cotacaoDolar = 4.80;
//   return cotacaoDolar * valorEmDolar;
// }



// console.log(converteEmrReais(5));

// function caulculoDaArea(altura , largura){

//   return largura * altura;

// }

// alert (caulculoDaArea(10,20));

// function areaDoCirculo(raio){

//   return 3.14 * (raio * raio);

// }

// alert(areaDoCirculo(5));

// function tabuada(numero){
//   for(let i = 1; i<=10; i++){
//   let resultado =  numero *i;
//   alert (`${numero} * ${i} = ${resultado}`);

//   }


// }
//  tabuada(9);


// CRIANDO LISTAS

//  let listaGenerica =[]; // criando uma lista vazia

// let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin','Python']; // criando uma lista com conteudo
// linguagensDeProgramacao.push = ['Java', 'Ruby','GoLang']; 


//  //adicionando mais elementos nessa lista 


// let tresNomes = ['maria', 'josé', 'thiago'];
 
//  console.log(tresNomes[0]);

//  let listaSegundoElemento =['carol', 'aline', 'ster']; //exibir o segundo elemento
//  console.log(listaSegundoElemento[1]);


// let listaUltimoElemento = ['camila','vitoria', 'eduarda'];
// console.log(listaUltimoElemento[2]);
 
let texto = 'este é o resultado';
   responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2});
   
   console.log(texto);