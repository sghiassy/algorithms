$(function() {
	window.terminal = new Terminal();

	$('#submit').click(function() {
		var sortArray = $('#sortArray').val().split(" ").map(function(value, index) {
			return parseInt(value);
		});
		
		terminal.log(sortArray);
		
		for(var h = parseInt(sortArray.length / 2) + 1; h >= 1; h--) {
			for(var i = 0; i + h <= sortArray.length; i++) {
				if(sortArray[i] > sortArray[i + h]) {
					var temp = sortArray[i];
					sortArray[i] = sortArray[i + h];
					sortArray[i + h] = temp;
				}
			}
			
			terminal.log(sortArray);
		} 
	});
});