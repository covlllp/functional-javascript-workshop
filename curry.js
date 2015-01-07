function curryN(fn, n) {
	function sub_curry(fn) {
		var args = slice(arguments, 1);
		return function() {
			return fn.apply(this, args.concat(slice(arguments,0)));
		}
	}

	n = n || fn.length;
	return function() {
		if (arguments.length < n) {
			var combined = [fn].concat(slice(arguments, 0));
			return curryN(
					sub_curry.apply(this, combined),
					n - arguments.length
				);
		} else {
			return fn.apply(this, arguments);
		}
	}
}

function slice(obj, ind) {
	return Array.prototype.slice.call(obj, ind);
}

module.exports = curryN;
