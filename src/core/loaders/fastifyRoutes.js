// Import Route List
import routeList from "../routes";
/**
 * Fastify Routes Loader
 * @param {import("fastify").FastifyInstance} app
 * @returns {Promise<void>}
 */
export async function load(app) {
	routeList.forEach((route) => {
		app.route({
			...route,
		});
	});
}
// Default Export
export default load;
