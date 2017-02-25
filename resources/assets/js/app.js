import Vue from 'vue/dist/vue.min.js';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource/dist/vue-resource.js';
//Views
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import NotFoundComponent from './components/NotFoundComponent.vue';

Vue.use(VueResource);

Vue.use(VueRouter)

// var App = Vue.extend()
var router = new VueRouter({
    hashbang: true,
    history: true,
    linkActiveClass: "active",
    // mode: 'html5',
    // root: '/',
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    // { path: '*', redirect: '/' }
    {path: '*', component: NotFoundComponent},
    ]
})

// router.beforeEach(function (to, from, next) {
//     window.scrollTo(0, 0);
//     next();
// });

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})

