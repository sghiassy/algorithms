$(function() {
	window.terminal = new Terminal();
	
	window.gcd = function(u, v) {
		var temp;
		
		while(u > 0) {
			if(u < v) {
				temp = u;
				u = v;
				v = temp;
			}
			
			u = u - v;
		}
		
		return v;
	};

	$('#submit').click(function() {
		var num = $('#numerator').val();
		var den = $('#denominator').val();
		var commonDenominator = gcd(num, den);
		
		terminal.log(num + '/' + den + '=' + num/commonDenominator + '/' + den/commonDenominator);
	});
});