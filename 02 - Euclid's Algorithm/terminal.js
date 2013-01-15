//This is simply a helper object that wraps the functionality of appending comments to the 
//DOM in the same manner as console.log();

$(function() {
	window.Terminal = (function() {
		var $terminal = $('#output');

		return function() {
			this.log = function(valueString) {
				$terminal.append('<p>$: ' + valueString + '</p>');
			}
		};
	})();
})