// Import Loaders
import fastifyApp from "./fastifyApp";
import fastifyPlugins from "./fastifyPlugins";
import fastifyRoutes from "./fastifyRoutes";
import fastifyListen from "./fastifyListen";
import mongoApp from "./mongoApp";
/**
 * Application Loader
 */
export async function load() {
	// Create Fastify App
	const app = await fastifyApp();
	// Create Mongoose Connection
	const mongo = await mongoApp();
	// Prepare Plugins
	await fastifyPlugins(app);
	// Prepare Routes
	await fastifyRoutes(app);
	// Start Listening
	await fastifyListen(app);
	// Return Apps
	return { app, mongo };
}
// Default Export
export default load;
