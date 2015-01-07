module.exports = function(arr, i, j) {
	return Array.prototype.slice.call(arr, i, j);
}

// Actual solution
// module.exports = Function.call.bind(Array.prototype.slice);
