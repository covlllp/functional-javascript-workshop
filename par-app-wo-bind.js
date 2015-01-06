function logger(namespace) {
	return function() {
		var arr = Array.prototype.slice.call(arguments, 0);
		arr.unshift(namespace);
		console.log.apply(console,arr);
	};
}

function logger2(namespace) {
	return function() {
		console.log.apply(console, [namespace].concat(Array.prototype.slice.call(arguments)));
	};
}

module.exports = logger2