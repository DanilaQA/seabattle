var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt("Ты готов выстрелить? (Введи цифру от 0 до 6):");
	if(guess < 0 || guess > 6){
		alert("Я же просил ввести цифру от 0 до 6!");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				alert("Ты победил в игре!")

			}
		}else{
			alert("Не попал!");

		}
	}
}
var status = "Вы выстрелили " + guesses + " раза для того, чтобы попасть по кораблю, " + "это показывает уровень вашей точности, как: " + (3/guesses);
alert(status);
