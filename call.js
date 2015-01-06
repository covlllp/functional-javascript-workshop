function duckCount() {
	return Array.prototype.slice.call(arguments, 0).reduce(function(a, b) {
		return (("quack" in b) ? ++a : a);
	}, 0);
}

function duckCount2() {
	return Array.prototype.slice.call(arguments, 0).filter(function(obj) {
		return (Object.prototype.hasOwnProperty.call(obj, "quack"));
	}).length;
}

module.exports = duckCount2