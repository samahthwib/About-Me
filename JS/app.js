'use strict';


var yourName = prompt('Whats your name ? ');
alert('Welcome to my blog ' + yourName);
alert('Now , before enter you will play my guessing game ');
//console.log('Welcome to my website '+ yourName);


var score=0;

var myName = prompt('Do you know my name ? ').toUpperCase();
//console.log(myName);
if (myName === 'YES' || myName === 'Y') {
  alert(myName + ' You Know me!  ' );
  score++;
} else if (myName === 'NO' || myName === 'N') {
  alert(myName + ' You Don\'t know me  ');
  alert('I\'m Samah Thweib');
} else {
  alert('Nothing');
}

var bachelorsMajor= prompt(' Do you know if my major in the university is  a computer science? ').toUpperCase();
//console.log(bachelorsDegree);
if (bachelorsMajor === 'YES' || bachelorsMajor === 'Y') {
  alert(bachelorsMajor +' You are wrong' );
  alert('I studied Computer Engineering ');
} else if (bachelorsMajor === 'NO' || bachelorsMajor === 'N') {
  alert(bachelorsMajor + ' bravo, my major is computer engineering ');
  score++;
} else{
  alert('Nothing');
}

var loveLearning = prompt('Do you know if I\'m studying something new at present? ').toUpperCase();
//console.log(loveLearning);
if (loveLearning === 'YES' || loveLearning === 'Y') {
  alert( loveLearning +' great! you are doing fine' );
  score++;
} else if (loveLearning === 'NO' || loveLearning === 'N') {
  alert(loveLearning + ' sorry , wrong answer ');
  alert('I\'m Studying advanced coding in the LTUC-Abdul Aziz Al-Gurair School ');
} else {
  alert('Nothing');
}

var myHoppy = prompt('Do you know if I love game-development  ? ').toUpperCase();
//console.log(myHoppy);
if (myHoppy === 'YES' || myHoppy === 'Y') {
  alert(myHoppy + ' Wow! you are amazing' );
  score++;
} else if (myHoppy === 'NO' || myHoppy === 'N') {
  alert(myHoppy + ' sorry you are wrong');
  alert(myHoppy + ' Designing and modeling on Cinema 4D one of my interests , so i love game-development.');
} else {
  alert('Nothing');
}



var myAge = prompt('Do you know if my age is 23 ? ').toUpperCase();
//console.log(myAge);
switch (myAge) {
case 'YES':
case 'Y':
  alert(' it\'s wrong!');
  alert(' 24 is the right answer');
  break;
case 'NO': // like (or) on if statements
case 'N':
  alert(' Yeaaah , you are right!');
  score++;
  break;
default:
  alert('nothing !');
  break;
}


// var travelTo = prompt('Do you know how many countries I traveled to ? ').toUpperCase();


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
    if(j===5){
      alert('jordan , Turkey , palestine , italy are my favourite countries');
    }
  }
 
}

alert('your score is ' + score + '/7');
