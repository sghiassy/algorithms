$(function() {
	window.terminal = new Terminal();

	$('#start').click(function() {
		var N = 1000;
		var a = [0,0];
		var i, j;

		//First we populate the array with all 1s
		for(i = 2; i <= N; i++) {
			a[i] = 1;
		}

		//Iterate over i * j. For each combination of the two (i * j), set the array equal to 0
		//to indicate that it is in fact not a prime number.
		for(i = 2; i <= N/2; i++) {
			for(j = 2; j <= N/i; j++) {
				a[i*j] = 0;
			}
		}

		//Now go through the loop and find all the array values that are still set to 1
		for(i = 1; i <= N; i++) {
			if(a[i] == 1) {
				terminal.log(i);
			}
		}
	});
});