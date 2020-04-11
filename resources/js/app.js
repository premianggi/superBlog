
require('./bootstrap');

window.Vue = require('vue');
//editor support
import 'v-markdown-editor/dist/v-markdown-editor.css';

import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);


//Support Vuex
import Vuex from 'vuex'

Vue.use(Vuex)
import storeData from './store/index'
const store = new Vuex.Store(
  storeData
)

//Support moment js
import {filter} from './filter'

// const store = new Vuex.Store({
//   storeData
// })

//Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

//v-form
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

window.Form = Form;

//Sweet Alert 2
import Swal from 'sweetalert2'

// window.swal = swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
// window.toast = toast

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'hash',

  })

const app = new Vue({
    el: '#app',
    router,
    store
});
