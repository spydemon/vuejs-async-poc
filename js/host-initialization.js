(async function() {
    const Vue = await import('vue');
    let Host = await import('./host.vue');
    Host = Host.default;
    const component = document.getElementById('component');
    Vue.createApp(Host).mount(component);
})();
