/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('newsfeed', require('./components/Newsfeed.vue').default);
Vue.component('giphy', require('./components/Giphy.vue').default);

/*
Filter function : allows applying moment  date library  to Vue  instance
not completely understood -ES6 stuff -spread /rest  operator and modele import/exports
 */
var moment = require('moment');

require('moment/locale/en-gb'); // locales all in lower-case

exports.install = function(Vue, options) {
    Vue.prototype.moment = function(...args) {
        return moment(...args);
    };
}

Vue.use(exports);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
