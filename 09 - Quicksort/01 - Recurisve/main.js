$(function() {
	window.terminal = new Terminal();
	window.count = 0;

	$('#submit').click(function() {
		var sortArray = $('#sortArray').val().split(" ").map(function(value, index) {
			return parseInt(value);
		});
		
		terminal.log(sortArray);
		terminal.log(quicksort(sortArray));
 
	});
});

function quicksort(array) {
	if(array.length <= 1) {
		return array;
	}
	
	var pivot = array[0];
	var left = [];
	var right = [];
	
	for(var i = 1, arrLen = array.length; i < arrLen; i++) {
		if(array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return quicksort(left).concat(pivot).concat(quicksort(right));
}