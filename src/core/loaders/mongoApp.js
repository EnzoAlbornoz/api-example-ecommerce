import mongoose from "mongoose";
/**
 * Mongoose Loader
 */
export async function load() {
	// Pull ENV config
	const {
		MONGODB_SERVER_IP,
		MONGODB_SERVER_PORT,
		MONGODB_ROOT_PSWD,
		MONGODB_ROOT_USER,
		MONGODB_INIT_DB,
	} = process.env;
	// Define Target Server
	const uri = `mongodb://${MONGODB_SERVER_IP}:${MONGODB_SERVER_PORT}`;
	// Define Login Config
	let authLogin = null;
	if (MONGODB_ROOT_PSWD && MONGODB_ROOT_USER) {
		authLogin = {
			user: MONGODB_ROOT_USER,
			password: MONGODB_ROOT_PSWD,
		};
	}
	// Coonect Mongoose
	const connection = await mongoose.connect(uri, {
		// Login Config
		auth: authLogin,
		dbName: MONGODB_INIT_DB,
		// DB Specific Config
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
		useCreateIndex: true,
	});
	// Return Mongoose Connection
	return connection;
}
// Default Export
export default load;
