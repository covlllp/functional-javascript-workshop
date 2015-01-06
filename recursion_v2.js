function getDependencies(tree) {
	var arr = [];

	function _addDependencies(tree) {
		// check if there are dependencies
		if (!(tree.hasOwnProperty('dependencies'))) return;

		Object.keys(tree.dependencies).reverse().forEach(function(dep) {
			_addDependencies(tree.dependencies[dep]);
			var id = dep + "@" + tree.dependencies[dep].version;
			if (arr.indexOf(id) === -1) arr.push(id);
		});
	}

	_addDependencies(tree);
	return arr;
}

module.exports = getDependencies;