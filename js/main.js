var WIN_COUNTER = 0
var LEVEL = 5
var randomNumList = [];
var winNumList = [];

while(randomNumList.length < LEVEL){
   var pcNumber = Math.floor(Math.random()* 100 + 1);
   if(!randomNumList.includes(pcNumber)){
      randomNumList.push(pcNumber);
   }
}

alert(randomNumList);

setTimeout(function(){
   for(var i = 0; i < LEVEL; i++){
   var userNum = parseInt(prompt('Inserisci un numero presente nella lista'));
   if(randomNumList.includes(userNum)){
      winNumList.push(userNum);
      WIN_COUNTER++
   }
}
   $('h1').text('Hai indovinato questi numeri: ' + winNumList)
   $('h2').text('Il tuo punteggio è: '+ WIN_COUNTER)
},30000);
