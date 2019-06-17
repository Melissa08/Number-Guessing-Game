//Number Guessing Game
var i= Math.floor(Math.random()*100) +.1;//Generates random number and stores it i

var j=i%2;// gets the modulus and store the result in j
if (j==0)//check to see if result in step three is zore or not
	   alert( "The number is Even");
else
		alert("The number is add odd");
for (count=1;count<=10;count++)
{
let num = prompt ("please enter a number:")//Captures user input

		if (num<i){
			alert("Your number is higher. Make another guess");
		}
		if (num<i){
			alert("Your number is lower. Make another guess");
		}
		if (num==i){
			alert("YOU WIN");
			break;
		}
		if(count==10) {
			alert("YOU LOSS");
		}
}