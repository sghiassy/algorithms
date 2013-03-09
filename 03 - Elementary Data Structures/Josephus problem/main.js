$(function() {
	window.terminal = new Terminal();

	$('#submit').click(function() {
		//Get the input values from the DOM
		var N = $('#number').val();
		var M = $('#execution').val();
		
		//Setup the linked list
		var linkedList = new SCG.Library.SinglyLinkedCircularLinkedList();

		//Create the linked list according to the user specified input
		linkedList.push(1);
		for(var i = 2; i <= N; i++) {
			linkedList.push(i);
		}
		
		//Output the current linked list
		terminal.log('The current LinkedList is:');
		terminal.log(linkedList.print());

		//Start the killing
		linkedList.resetPointer();
		
		while(linkedList.getPointer() != undefined) {//} && linkedList.getPointer() != linkedList.getPointer().getNextNode()) {
			
			for(var i = 1; i <= M - 1; i++) {
				linkedList.next();
			}

			var removedNodeValue = linkedList.removeNodeAtPointer();
			terminal.log('Killed Member: ' + removedNodeValue);

			linkedList.next();
		}
	});
});