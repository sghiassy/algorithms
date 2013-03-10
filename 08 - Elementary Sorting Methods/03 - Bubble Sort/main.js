$(function() {
	window.terminal = new Terminal();

	$('#submit').click(function() {
		var sortArray = $('#sortArray').val().split(" ").map(function(value, index) {
			return parseInt(value);
		});
		
		terminal.log(sortArray);
		
		for(var backStop = 0; backStop < sortArray.length; backStop++) {
			for(var pointer = sortArray.length - 1; pointer >= backStop; pointer--) {
				if(sortArray[pointer] < sortArray[pointer-1]) {
					var temp = sortArray[pointer];
					sortArray[pointer] = sortArray[pointer - 1];
					sortArray[pointer - 1] = temp;
				}
			}
			
			terminal.log(sortArray);
		}
	});
});