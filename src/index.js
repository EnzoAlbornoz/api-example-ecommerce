// Import Dependencies
import dotenv from "dotenv";
import { resolve } from "path";
import * as loaders from "./core/loaders";
// Define Environment
const { NODE_ENV } = process.env;
dotenv.config({
	path: resolve(process.cwd(), `.env${NODE_ENV ? `.${NODE_ENV}` : ""}`),
});
// Start Application
loaders.load();
