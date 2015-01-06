module.exports = function(goodUsers) {
	return function(verifyUsers) {
		return verifyUsers.every(function(verifyUser) {
			return goodUsers.some(function(goodUser) {
				return goodUser.id == verifyUser.id;
			});
		});
	};
}