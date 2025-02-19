

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dOhamGwc.js","_app/immutable/chunks/DmOzlFoQ.js","_app/immutable/chunks/Y_hAB0eR.js"];
export const stylesheets = [];
export const fonts = [];
