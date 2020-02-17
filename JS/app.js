'use strict';


var yourName = prompt('Whats your name ? ');
alert('Welcome to my website ' + yourName);
//console.log('Welcome to my website '+ yourName);


var myName = prompt('Do you know my name ? ').toUpperCase();
//console.log(myName);
if (myName === 'YES' || myName === 'Y') {
  alert(myName + ' You Know me! much love ' );
} else if (myName === 'NO' || myName === 'N') {
  alert(myName + ' You Do not know me , but now you will know me ');
} else {
  alert('Nothing');
}

var programmingLove= prompt(' Do you like programming? ').toUpperCase();
//console.log(programmingLove);
if (programmingLove === 'YES' || programmingLove === 'Y') {
  alert(programmingLove +' Me too! and this is what i am studying at this time' );
} else if (programmingLove === 'NO' || programmingLove === 'N') {
  alert(programmingLove + ' If you learn it you will love it ');
} else{
  alert('Nothing');
}

var loveLearnign = prompt('Do you have a passion to learn? ').toUpperCase();
//console.log(loveLearnign);
if (loveLearnign === 'YES' || loveLearnign === 'Y') {
  alert( loveLearnign +' great! I have passion too and I like to learn something new ' );
} else if (loveLearnign === 'NO' || loveLearnign === 'N') {
  alert(loveLearnign + ' Try to love it , it is so important ');
} else {
  alert('Nothing');
}

var gameDevelopment = prompt('Do you know game-development ? ').toUpperCase();
//console.log(gameDevelopment);
if (gameDevelopment === 'YES' || gameDevelopment === 'Y') {
  alert(gameDevelopment + ' Wow! like me , and it is my hobby' );
} else if (gameDevelopment === 'NO' || gameDevelopment === 'N') {
  alert(gameDevelopment + ' Try it , it is somthing cool ');
} else {
  alert('Nothing');
}

var workUnderPressur = prompt('Do you can work under pressure ? ').toUpperCase();

switch (workUnderPressur) {
case 'YES':
  alert(' Me too!');
  break;
case 'NO':
  alert(' Sorry but this is  the reality,you should work under the pressure!');
  break;
case 'Y':
  alert('Me too!');
  break;
case 'N':
  alert(' Sorry but this is  the reality,you should work under the pressure!');
  break;
default:
  alert('nothing !');
  break;
}

alert('I hope to enjoy your time in my website');

