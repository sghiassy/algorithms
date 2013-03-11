$(function() {
	window.terminal = new Terminal();
	window.count = 0;

	$('#submit').click(function() {
		var sortArray = $('#sortArray').val().split(" ").map(function(value, index) {
			return parseInt(value);
		});
		
		terminal.log(sortArray);
		terminal.log(mergeSort(sortArray));
	});
});

function mergeSort(array) {
	if(array.length == 1) {
		return array;
	} else {
		var splitAmnt = Math.floor(array.length / 2);
		var sortedArray1 = mergeSort(array.splice(0,splitAmnt));
		var sortedArray2 = mergeSort(array);
	}

	var mergedArray = [];
	var maxIterations = sortedArray1.length + sortedArray2.length;

	for(var i = 0, j = 0, k = 0; i < maxIterations; i++) {
		if(sortedArray1[j] > sortedArray2[k] || sortedArray2[k] == undefined) {
			mergedArray.push(sortedArray1[j]);
			j++
		} else {
			mergedArray.push(sortedArray2[k]);
			k++
		}
	}
	
	return mergedArray;
}