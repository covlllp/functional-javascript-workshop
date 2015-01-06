function reduce(arr, fn, initial) {
	function recurse(arr, fn, initial, ind) {
		if (ind >= arr.length) return initial;
		return recurse(arr, fn, fn(initial, arr[ind]),ind+1);
	}
	return recurse(arr, fn, initial, 0);
}

module.exports = reduce