var random = Math.floor(Math.random() * 5);

var location1 = random;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt("Это игра морской бой. В 7 ячейках по горизонтали от 0 до 6 расположен корабль, занимающий 3 ячейки подряд. Попробуй потопить этот корабль. Ты готов выстрелить? (Введи цифру от 0 до 6):");
	if(guess < 0 || guess > 6){
		alert("Я же просил ввести цифру от 0 до 6!");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			hits = hits + 1
			alert("Ты попал!");
			if(hits == 3){
				isSunk = true;
				alert("Ты победил в игре!")

			}
		}else{
			alert("Не попал!");

		}
	}
}
var status = "Вы выстрелили " + guesses + " раз(а) для того, чтобы потопить корабль, " + "это показывает уровень вашей точности, как: " + (3/guesses);
alert(status);
