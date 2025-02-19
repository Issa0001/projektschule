import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BQUaEmkd.js","_app/immutable/chunks/DmOzlFoQ.js","_app/immutable/chunks/Y_hAB0eR.js","_app/immutable/chunks/By2Lozxv.js","_app/immutable/chunks/C-XAjDFg.js","_app/immutable/chunks/Dd-7YK5a.js"];
export const stylesheets = ["_app/immutable/assets/2.Da9kwNTc.css"];
export const fonts = [];
