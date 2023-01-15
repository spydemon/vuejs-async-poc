/**
 * This construction seems needed since Vue import is now always async because it was configured as a singleton in
 * the configuration of the Webpack Module Federation Plugin.
 */
(async function() {
    const Vue = await import('vue');
    let Host = await import('./host.vue');
    Host = Host.default;
    const component = document.getElementById('component');
    Vue.createApp(Host).mount(component);
})();
