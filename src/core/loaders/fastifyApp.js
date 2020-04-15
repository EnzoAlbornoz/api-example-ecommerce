// Import Dependencies
import fastify from "fastify";
// Export Load
export async function load() {
	// Pull ENV Config
	const { DISABLE_LOGS } = process.env;
	// Define Default Options
	const loggerOptions =
		"".concat(DISABLE_LOGS).toLowerCase() !== "true"
			? {
					prettyPrint: true,
			  }
			: null;
	/** Define Config Options
	 * @type {import("fastify").ServerOptions}
	 */
	const fastifyOptions = {
		logger: loggerOptions,
	};
	// Return Instance
	return fastify(fastifyOptions);
}
// Default Export
export default load;
