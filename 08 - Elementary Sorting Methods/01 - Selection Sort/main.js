$(function() {
	window.terminal = new Terminal();

	$('#submit').click(function() {
		var sortArray = $('#sortArray').val().split(" ").map(function(value, index) {
			return parseInt(value);
		});
		
		terminal.log(sortArray);
		
		for(var i = 0, iLen = sortArray.length; i < iLen; i++) {
			var smallestIndex = i;
			
			for(var j = i + 1, jLen = sortArray.length; j < jLen; j++) {
				if(sortArray[j] < sortArray[smallestIndex]) {
					smallestIndex = j;
				}
			}
			
			//No need to swap if 'i' is already the smallest value
			if(smallestIndex != i) {
				var temp = sortArray[i];
				sortArray[i] = sortArray[smallestIndex];
				sortArray[smallestIndex] = temp;
			}
			
			terminal.log(sortArray);
		}
	});
});