export default {
	type: 'postgres',
	host: "",
	port: "",
	username: "",
	password: "",
	database: "",
	migrations: [
		'migrations/**/*.ts'
	],
	cli: {
		migrationsDir: 'migrations'
	}
}