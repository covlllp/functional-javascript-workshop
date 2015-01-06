function loadUsers(userIds, load, done) {
	var users = [];
	var count = 0;

	userIds.forEach(function(id, ind) {
		load(id, function(user) {
			users[ind] = user;
			if (++count === userIds.length) return done(users);
		});
	});
}

module.exports = loadUsers;