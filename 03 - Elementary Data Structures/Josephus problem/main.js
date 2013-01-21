$(function() {
	window.terminal = new Terminal();

	$('#submit').click(function() {
		//Get the input values from the DOM
		var N = $('#number').val();
		var M = $('#execution').val();
		
		//Setup the linked list
		var linkedList = new SCG.Library.LinkedList();
		linkedList.push(1);

		//Create the linked list according to the user specified input
		for(var i = 2; i <= N; i++) {
			linkedList.push(i);
		}
		terminal.log('The current LinkedList is:');
		terminal.log(linkedList.print());
		
		//
	});
});