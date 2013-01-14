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
		
		terminal.log(num + '/' + den + ' = ' + num/comDen + '/' + den/comDen);
	});
});