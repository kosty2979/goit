function pow(x, y) {

	if ( isNaN(x) || isNaN(y) ) {
	return rezult='BAD';
	
	} else 	{

		var rezult=+x;

		if (y < 0) { 
			var n = -y ; 
		} else {
			n = y ;
		}

		if (y == 1) {
			return rezult;
		}

		if (y == -1) {
		 	rezult = 1/x;
		 	return rezult;
		}

		for (var i = 1; i<n; i++)  {
			rezult = rezult*x;
		}
		if (y < 0) {
			return 1/rezult;
		} else {
			return rezult;
		}
	}
};

function selectAnswer(result){
	
if ( typeof result == "number" ) {
	var string = 'ответ '+a+" ^ "+b+" = "+result
return string ;
} else {
return 'не верный ввод данных'};
};

function outputAnswer(string){
 return alert(string)
};

var a = prompt("введи основание степени, X не равное '0'");
var b = prompt("введи показатель степени, Y не равное '0'");

var rez = pow(a, b);
var str = selectAnswer(rez);
outputAnswer(str);