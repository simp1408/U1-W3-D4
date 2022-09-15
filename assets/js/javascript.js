//esercizio tabellina con loop
// function tabellina(){
// let num = parseInt(document.getElementById('input').value);
// let button = document.getElementById('button');
// let tab = parseInt(document.getElementById('input').value);
// for(i=0;i<=11;i++){
//     tab = (num * i);
// }

// button.addEventListener('click',()=>{
//     document.getElementById('risultato').innerHTML=tab;
//     console.log(tab);
// });
// }
// tabellina del 6 FUNZIONANTE
// let num = 6;
// let tab="";
// for(i=0;i<=10;i++){
//     tab= num * i;
//     console.log(tab);
// }

//tabellina
let num= document.getElementById('numero');
let button= document.getElementById('button');
let risultato= document.getElementById('risultato');

function tabellina(numero)
{

 let tab="";
  for( i=1;i<=10;i++){   
    tab= numero * i;
    document.write(tab);
    }
   
  }
 button.addEventListener('click',()=>{  
    risultato.innerHTML= tabellina(num.value);
  });
  
//   //array 
//   //faccio funzione add con push
//   let persone = ['simone','luca','giovanni','andrea']; 
//   function add(nome){
//     let newName = persone.push(nome);
//     return newName; 
//   } 
//   let ris= add('mario');
//   console.log(ris);
// // funzione cancella l ultimo elemento
// let persone2= ['simone','luca','giovanni','andrea','mario'];
// // console.log(persone2);

// function cancella(){
//     let canc = persone.pop();
//     return canc;
// }

// let ris2 = cancella();
// // console.log(ris2);

let persone3= ['simone','luca','giovanni','andrea','mario','vittoria'];
console.log(persone3);


//cancella l'ultimo elemento
function cancellaUltimoElemento()
{
    return persone3.pop();
}
let ris2= cancellaUltimoElemento();
console.log(persone3);

//aggiungere "push" un elemento nell array tramite variabile
let nomeElemento="gianfranco";

function addElemento(name)
{
    return persone3.push(name);
}
let ris1 = addElemento(nomeElemento);
console.log(persone3.length);

//posizonare un elemento
function splice(){
    return persone3.splice(3,0,'ciccio');
}

let risSplice = splice();
console.log(persone3);

//visualizzo il terzo elemento con indice(2);
function visualizzoElemento(){
    return persone3[2];
}
let visualNome=visualizzoElemento();
console.log(visualNome);



//function unshift
function unshift(nome)
{
    return persone3.unshift(nome);
}
let ultimoElemento = unshift('max');
console.log(ultimoElemento);
console.log(persone3);

//function shift

function shift()
{
    return persone3.shift();
}
let tolgoNome = shift();
console.log(tolgoNome);
console.log(persone3);





  //aggiungere un nome
//   persone.push('andrea');
  //tolgo l 'ultimo nnome
//  persone.pop();
//   console.log(persone);
//tolgo la prima
//   persone.shift();
//   console.log(persone);
//sostituisco un nome
// persone[2]='aldo';
// console.log(persone);

//copio l array in un altro array
// let newArray=[];

// for(let i=0; i< persone.length; i++){
//     newArray[i]= persone[i] + 2.0;
// }
// console.log(newArray);

//Trasformo in maiuscolo il titolo
function upperCase() {
    let nome = document.getElementById("nome").value;
     let newNome = nome.toUpperCase();
    document.getElementById("res").innerHTML = "Il nome inserito è: " + newNome;
 };

 function lowerCase()
 {
    let nome=document.getElementById("nome").value;
    let newName= nome.toLowerCase();
    document.getElementById('res').innerHTML= "Il nome inserito è: " + newName;
 }  
//unisco due stringe una minuscola e una maiuscola e le concateno
 let frase = "benvenuto";
 let frase2="nuovo utente";

  let paroleMaiuscole = frase.toLowerCase();
  let paroleMinsucole = frase2.toUpperCase();
  document.write(paroleMaiuscole+"  "+ paroleMinsucole);




