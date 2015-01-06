function repeat(func, num) {
	for (var i = 0; i < num; i++) {
		func.apply(this, arguments);
	}
}

module.exports = repeat