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

var a = prompt("введи основание степени, X не равное '0'");
var b = prompt("введи показатель степени, Y не равное '0'");

var rez = pow(a, b);

if ( typeof rez == "number" ) {
alert( 'ответ '+a+" ^ "+b+" = "+rez );
} else {
alert(' не верный ввод данных')};
