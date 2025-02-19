export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BUn7lhY9.js","app":"_app/immutable/entry/app.D2hfsr_j.js","imports":["_app/immutable/entry/start.BUn7lhY9.js","_app/immutable/chunks/CtQ--dZ6.js","_app/immutable/chunks/Y_hAB0eR.js","_app/immutable/chunks/Dd-7YK5a.js","_app/immutable/entry/app.D2hfsr_j.js","_app/immutable/chunks/Y_hAB0eR.js","_app/immutable/chunks/C-XAjDFg.js","_app/immutable/chunks/DmOzlFoQ.js","_app/immutable/chunks/Dd-7YK5a.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
