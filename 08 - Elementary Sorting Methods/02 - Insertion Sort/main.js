$(function() {
	window.terminal = new Terminal();

	$('#submit').click(function() {
		var sortArray = $('#sortArray').val().split(" ").map(function(value, index) {
			return parseInt(value);
		});
		
		terminal.log(sortArray);
		
		for(var i = 0, iLen = sortArray.length; i < iLen; i++) {
			for(var j = i - 1; j >= 0; j--) {
				if(sortArray[j] > sortArray[j + 1]) {
					var temp = sortArray[j];
					sortArray[j] = sortArray[j + 1];
					sortArray[j + 1] = temp;
				}
			}
			
			terminal.log(sortArray);
		}
	});
});