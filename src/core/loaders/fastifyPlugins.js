// Import Dependencies
import fastifyHelmet from "fastify-helmet";
import fastifyCORS from "fastify-cors";
/**
 * Fastify Plugins Loader
 * @param {import("fastify").FastifyInstance} app
 * @returns {Promise<void>}
 */
export async function load(app) {
	// Helmet/Securty Defaults
	app.register(fastifyHelmet);
	// CORS Definition
	app.register(fastifyCORS);
	// Wait Until Plugins Loaded
	await app.ready();
}

export default load;
