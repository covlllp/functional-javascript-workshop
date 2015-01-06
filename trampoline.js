function repeat(operation, num) {
	return function() {
		if (num <= 0) return;
		operation();
		return repeat(operation, --num);
	}
}

function trampoline(fn) {
	while (fn instanceof Function) {
		//fn = fn.apply(fn.context, fn.args);
		fn = fn();
	}
	return fn;
}

module.exports = function(operation, num) {
	trampoline(function() {
		return repeat(operation, num);
	});
}