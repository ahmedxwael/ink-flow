import { vitePlugin as remix } from "@remix-run/dev";
import { createRoutesFromFolders } from "@remix-run/v1-route-convention";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

export default defineConfig({
	plugins: [
		remix({
			routes(defineRoutes) {
				// `createRoutesFromFolders` will create routes for all files in the
				// routes directory using the same default conventions as Remix v1.
				const result = createRoutesFromFolders(defineRoutes, {
					// If you're already using `ignoredRouteFiles` in your Remix config,
					// you can move them to `ignoredFilePatterns` in the plugin's options.
					ignoredFilePatterns: ["**/.*", "**/*.css"],
				});

				return result;
			},
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				v3_singleFetch: true,
				v3_lazyRouteDiscovery: true,
			},
		}),
		tsconfigPaths(),
	],
	server: {
		open: true,
	},
	optimizeDeps: {
		include: [],
	},
});
