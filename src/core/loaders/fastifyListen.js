/**
 * Fastify Listener Starter
 * @param {import("fastify").FastifyInstance} app
 * @returns {Promise<void>}
 */
export async function load(app) {
	return new Promise((resolve, reject) => {
		const { FASTIFY_PORT, FASTIFY_HOST } = process.env;

		// Start Listening
		app.listen(parseInt(FASTIFY_PORT, 10) || 3000, FASTIFY_HOST, (err) => {
			if (err) {
				return reject(err);
			}
			return resolve();
		});
	});
}
// Default Export
export default load;
