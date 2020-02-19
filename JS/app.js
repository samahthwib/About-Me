'use strict';


// var yourName = prompt('Whats your name ? ');
// alert('Welcome to my website ' + yourName);
//console.log('Welcome to my website '+ yourName);

var score=0;


function userName (){
  var myName = prompt('Do you know my name ? ').toUpperCase();
  //console.log(myName);
  if (myName === 'YES' || myName === 'Y') {
    // alert(myName + ' You Know me!  ' );
      score++;
    } else if (myName === 'NO' || myName === 'N') {
    // alert(myName + ' You Don\'t know me , but now you will know me later');
    } else {
      alert('Nothing');
    }
}
userName();

function uniStudy(){
  var bachelorsMajor= prompt(' Do you know what is my major in the university? ').toUpperCase();

  if (bachelorsMajor === 'YES' || bachelorsMajor === 'Y') {
  // alert(bachelorsMajor +'You are right' );
    score++;
  } else if (bachelorsMajor === 'NO' || bachelorsMajor === 'N') {
  // alert(bachelorsMajor + ' you will know it later ');
  } else{
    alert('Nothing');
  }
  // console.log(bachelorsMajor);
}
uniStudy();

function funLearning(){
  var loveLearning = prompt('Do you know what I\'m studying know? ').toUpperCase();
  //console.log(loveLearning);
  if (loveLearning === 'YES' || loveLearning === 'Y') {
  // alert( loveLearning +' great! you are doing fine' );
    score++;
  } else if (loveLearning === 'NO' || loveLearning === 'N') {
    // alert(loveLearning + ' Not a problem ');
  } else {
    alert('Nothing');
  }
}
funLearning();

function myIntrest(){
  var myHoppy = prompt('Do you know what is my hoppy ? ').toUpperCase();
  //console.log(myHoppy);
  if (myHoppy === 'YES' || myHoppy === 'Y') {
  // alert(myHoppy + ' Wow! you are amazing' );
    score++;
  } else if (myHoppy === 'NO' || myHoppy === 'N') {
  // alert(myHoppy + ' sorry you are wrong');
  } else {
    alert('Nothing');
  }
}
myIntrest();



function oldAge(){
  var myAge = prompt('Do you know how old am I ? ').toUpperCase();
  if (myAge === 'YES' || myAge === 'Y') {
        // alert(' Yeaaah , you are right!');
        score++;
      } else if (myAge === 'NO' || myAge === 'N') {
      //alert(' it\'s wrong!');
      } else {
        alert('Nothing');
      }
}
oldAge();


var travelTo = prompt('Do you know how many countries I traveled to ? ').toUpperCase();

function flyLove(travelNumber){

for (let i = 0; i<= 3; i++) {
  var travelNumber = parseInt(prompt('How many countries I traveled to ? you have just 4 attempt .Be careful'));
  //console.log(travelNumber);
  switch(travelNumber){
  case 3:
    alert(' True!');
    score++;
    i=4;
    break;
  case 1:
  case 2:
  case 4:
  case 5:
    alert(' Too High');

    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    alert(' Too Low');

    break;
  default:
    alert('nothing !');
    i=4;
    break;
  }

  if(i===3){
    travelNumber=alert('The correct answer is : 3');
  }
}
}
flyLove();


function aroundWorld (){
for(var j=0 ; j < 6 ; j++){
  var favCountries = ['palestine' , 'turkey' , 'jordan' , 'italy'];
  for(var x = 0; x < favCountries.length ; x = x+1){
    var myFav = prompt('What\'s my favourite countries?').toLowerCase();
    switch(myFav){
    case favCountries[0] :
      alert('yes you are True !');
      score++;
      j=6;
      //console.log(x);
      x=favCountries.length;
      break;

    case favCountries[1] :
      alert('yes you are True !');
      score++;
      j=6;
      x=favCountries.length;
      break;
    case favCountries[2] :
      alert('yes you are True !');
      score++;
      j=6;
      x=favCountries.length;
      break;
    case favCountries[3] :
      alert('yes, True !');
      score++;
      j=6;
      x=favCountries.length;
      break;

    default:
      alert('False !');
      x=favCountries.length;
      break;
    }
  }
}
}
aroundWorld();
alert('your score is ' + score);
