module.exports = {
	development: {
		client: 'pg',
		connection: process.env.DATABASE_URL || 'postgres://localhost/tennisbuddy',
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL || 'postgres://localhost/tennisbuddy',
	},
};