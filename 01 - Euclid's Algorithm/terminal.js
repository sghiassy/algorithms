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