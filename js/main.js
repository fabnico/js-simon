/*
Ho scritto il funzionamento grezzo, so che in qualche
modo è possibile utilizzare meglio javascript/jquery per evitare tutte queste ripetizioni. Ci lavoro.
*/

var randomNumList = [];
var userNumList = [];
var winNumList = [];
var WIN_COUNTER = 0

while(randomNumList.length < 5){
   var pcNumber = Math.floor(Math.random()* 100 + 1);
   if(!randomNumList.includes(pcNumber)){
      randomNumList.push(pcNumber);
   }
}

alert(randomNumList);

setTimeout(function(){
   var userNum1 = parseInt(prompt('Inserisci il primo numero'));;
   userNumList.push(userNum1);
   var userNum2 = parseInt(prompt('Inserisci il secondo numero'));
   userNumList.push(userNum2);
   var userNum3 = parseInt(prompt('Inserisci il terzo numero'));
   userNumList.push(userNum3);
   var userNum4 = parseInt(prompt('Inserisci il quarto numero'));
   userNumList.push(userNum4);
   var userNum5 = parseInt(prompt('Inserisci il quinto numero'));
   userNumList.push(userNum5);

   console.log(randomNumList);
   console.log(userNumList);

   if(randomNumList.includes(userNum1)){
      winNumList.push(userNum1);
      WIN_COUNTER++
   }
   if(randomNumList.includes(userNum2)){
      winNumList.push(userNum2);
      WIN_COUNTER++
   }
   if(randomNumList.includes(userNum3)){
      winNumList.push(userNum3);
      WIN_COUNTER++
   }
   if(randomNumList.includes(userNum4)){
      winNumList.push(userNum4);
      WIN_COUNTER++
   }
   if(randomNumList.includes(userNum5)){
      winNumList.push(userNum5);
      WIN_COUNTER++
   }
   console.log(WIN_COUNTER)
   console.log(winNumList)

   $('h1').text('Hai indovinato questi numeri: ' + winNumList)
   $('h2').text('Il tuo punteggio è: '+ WIN_COUNTER)
},1000);
