import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'


import axios from "axios";
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/analytics';

Vue.prototype.$axios = axios;


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"




Vue.config.productionTip = false

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCZDEXRLXM5IowOMbka9kPty1vLMAk3xI8",
    authDomain: "shop-noa.firebaseapp.com",
    projectId: "shop-noa",
    storageBucket: "shop-noa.appspot.com",
    messagingSenderId: "511362528853",
    appId: "1:511362528853:web:7c8da8eb976b3fce16c6dc",
    measurementId: "G-0J7Q8S2N3W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
