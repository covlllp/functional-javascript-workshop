function Spy(target, method) {
	this.count = 0;

	var temp = target[method];
	target[method] = function secret() {
		this.count++;
		return temp.apply(target, arguments);	
	}.bind(this);

	if (!(this instanceof Spy)) return new Spy(target, method);
}

function Spy2(target, method) {
	var obj = {count: 0};
	var origFunc = target[method];

	target[method] = function() {
		obj.count++;
		return origFunc.apply(this, arguments);
	}

	return obj;
}

module.exports = Spy2;