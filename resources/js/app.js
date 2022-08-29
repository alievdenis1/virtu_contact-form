/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vClickOutside from 'v-click-outside'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(vClickOutside)

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('contact-form', require('./components/ContactForm.vue').default);
Vue.component('app', require('./components/app.vue').default);
Vue.component('step4', require('./components/pages/step4.vue').default);
Vue.component('step3', require('./components/pages/step3.vue').default);
Vue.component('step2', require('./components/pages/step2.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('#MuiDrawer-root').classList.toggle('MuiDrawer-root');
})
