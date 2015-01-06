module.exports = function(namespace) {
	return function() {
		console.log.bind(console, namespace).apply(console, Array.prototype.slice.call(arguments));
	}
}

module.exports = function(namespace) {
	return console.log.bind(console, namespace)
}
