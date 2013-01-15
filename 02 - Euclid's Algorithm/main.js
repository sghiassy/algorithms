$(function() {
	window.terminal = new Terminal();

	window.gcd = function(num, den) {
		var temp;
		
		while(num > 0) {
			if(num < den) {
				temp = num;
				num = den;
				den = temp;
			}
			
			num = num - den;
		}
		
		return den;
	};

	$('#submit').click(function() {
		var num = $('#numerator').val();
		var den = $('#denominator').val();
		var comDen = gcd(num, den);
		
		if(num > 0 && den > 0) {
			terminal.log(num + '/' + den + ' = ' + num/comDen + '/' + den/comDen);
		} else {
			terminal.log('Your numerator and denominator must be positive for this algorithm to work');
		}
	});
});